import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { renderToString } from '@vue/server-renderer'
import { createServer } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, 'dist')
const routes = ['/', '/contact']

// Read manifest - Vite 7+ generates it in .vite subdirectory
const manifestPath = path.join(distDir, '.vite', 'manifest.json')
if (!fs.existsSync(manifestPath)) {
  throw new Error('dist/.vite/manifest.json not found')
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))

// Find main entry in manifest
const entryKey = manifest['src/main.ts']
  ? 'src/main.ts'
  : Object.keys(manifest).find((k) => manifest[k].isEntry) || ''

if (!entryKey) throw new Error('Could not find an entry in manifest.json')
const entry = manifest[entryKey]

// Collect asset file paths
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
    // Load SSR entry through Vite
    const { createApp } = await vite.ssrLoadModule('/src/main.ssr.ts')

    for (const url of routes) {
      const { app, router } = createApp(url)
      await router.isReady()

      const appHtml = await renderToString(app)

      const cssLinks = cssFiles.map((f) => `<link rel="stylesheet" href="/${f}">`).join('\n')
      const jsScripts = jsFiles.map((f) => `<script type="module" src="/${f}"></script>`).join('\n')

      const html = `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <title>${url === '/' ? 'Home' : 'Contact'}</title>
          ${cssLinks}
        </head>
        <body>
          <div id="app">${appHtml}</div>
          ${jsScripts}
        </body>
      </html>`

      const outfile = path.join(distDir, url === '/' ? 'index.html' : `${url.slice(1)}.html`)
      fs.mkdirSync(path.dirname(outfile), { recursive: true })
      fs.writeFileSync(outfile, html)
      console.log(`✓ prerendered ${url} -> ${path.relative(process.cwd(), outfile)}`)
    }
  } finally {
    await vite.close()
  }
}

prerender().catch((e) => {
  console.error(e)
  process.exit(1)
})
