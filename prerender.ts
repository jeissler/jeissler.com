import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToString } from '@vue/server-renderer'
import { createServer } from 'vite'
import { transformHtmlTemplate } from '@unhead/vue/server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, 'dist')
const routes = ['/', '/contact', '/portfolio', '/portfolio/markdown']

// Read manifest - Vite 7+ generates it in .vite subdirectory
const manifestPath = path.join(distDir, '.vite', 'manifest.json')
if (!fs.existsSync(manifestPath)) {
  throw new Error('dist/.vite/manifest.json not found')
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))

// Main entry in manifest
const entryKey = manifest['src/main.ts']
  ? 'src/main.ts'
  : Object.keys(manifest).find((k) => manifest[k].isEntry) || ''

if (!entryKey) throw new Error('Could not find an entry in manifest.json')
const entry = manifest[entryKey]

// Asset file paths
const jsFiles: string[] = [
  entry.file,
  ...(entry.imports || []).map((k: string) => manifest[k].file),
]
const cssFiles: string[] = [
  ...(entry.css || []),
  ...(entry.imports || []).flatMap((k: string) => manifest[k].css || []),
]

async function prerender() {
  // Start a Vite dev server in middleware mode so .vue works
  const vite = await createServer({
    configFile: path.resolve(__dirname, 'vite.config.ts'),
    root: path.resolve(__dirname),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  try {
    // Load SSR entry
    const { createApp } = await vite.ssrLoadModule('/src/main.ssr.ts')

    for (const url of routes) {
      const { app, router, head } = createApp(url)
      await router.isReady()

      const appHtml = await renderToString(app)

      const cssLinks = cssFiles.map((f) => `<link rel="stylesheet" href="/${f}">`).join('\n')
      const jsScripts = jsFiles.map((f) => `<script type="module" src="/${f}"></script>`).join('\n')

      // Base HTML template
      const template = `<!doctype html>
        <html class="scroll-smooth">
          <head>
            ${cssLinks}
          </head>
          <body class="min-h-screen bg-white text-zinc-900">
            <div id="app">${appHtml}</div>
            ${jsScripts}
          </body>
        </html>`

      // Inject unhead tags
      const html = await transformHtmlTemplate(head, template)

      const outfile = path.join(distDir, url === '/' ? 'index.html' : `${url.slice(1)}.html`)
      fs.mkdirSync(path.dirname(outfile), { recursive: true })
      fs.writeFileSync(outfile, html)
      console.log(`✓ prerendered ${url} -> ${path.relative(process.cwd(), outfile)}`)
    }
  } catch (e) {
    console.error('Prerender failed:', e)
    process.exit(1)
  } finally {
    await vite.close()
  }
}

prerender()
