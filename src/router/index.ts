import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../App.vue') },
  { path: '/contact', name: 'contact', component: () => import('../App.vue') },
]

const isClient = typeof window !== 'undefined'

export function makeRouter(ssr: boolean) {
  const history = ssr ? createMemoryHistory() : createWebHistory()

  const router = createRouter({
    history,
    routes,
    scrollBehavior(to) {
      if (isClient && to.name === 'contact') {
        requestAnimationFrame(() => {
          const el = document.getElementById('contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        })
      }
      return { top: 0 }
    },
  })

  return router
}
