import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/', name: 'Home', component: App },
  { path: '/contact', name: 'Contact', component: App }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.name === 'Contact') {
      setTimeout(() => {
        const el = document.getElementById('contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
    return { top: 0 }
  }
})

export default router 