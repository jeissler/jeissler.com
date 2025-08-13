import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { makeRouter } from './router'

export function createApp(url: string) {
  const app = createSSRApp(App)
  const pinia = createPinia()
  const router = makeRouter(true) // use SSR memory

  app.use(pinia)
  app.use(router)

  router.push(url)

  return { app, router }
}
