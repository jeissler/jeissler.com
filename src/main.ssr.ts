import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/server'
import App from './App.vue'
import { makeRouter } from './router'
import { headConfig } from './config/head'

export function createApp(url: string) {
  const app = createSSRApp(App)
  const pinia = createPinia()
  const router = makeRouter(true) // use SSR memory
  const head = createHead(headConfig as object)

  app.use(pinia)
  app.use(router)
  app.use(head)

  router.push(url)

  return { app, router, head }
}
