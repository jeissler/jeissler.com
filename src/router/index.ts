import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  { path: '/', name: 'home', component: App },
  { path: '/contact', name: 'contact', component: App },
]

const scrollToSection = (name: string) => {
  const el = document.getElementById(name)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.name === 'contact') {
      setTimeout(() => scrollToSection(to.name as string), 0)
    }
    return { top: 0 }
  },
})

export default router
