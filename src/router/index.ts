import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { useHead } from '@unhead/vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Home',
      description:
        'Howdy! I am a maker, doer and way-finding Software Engineer in Kansas City, MO.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Home.vue'),
    meta: {
      title: 'Contact',
      description: 'Reach out about opportunities, projects or just say hello.',
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/pages/Portfolio.vue'),
    meta: {
      title: 'Portfolio Projects',
      description: 'A write up of some of my most recent and impactful work.',
    },
    children: [
      {
        path: 'markdown',
        name: 'portfolio-markdown',
        component: () => import('@/pages/Portfolio.vue'),
      },
    ],
  },
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

  router.beforeResolve((to) => {
    if (to.meta?.title) {
      useHead({
        title: to.meta.title as string,
        meta: [
          {
            name: 'description',
            content: to.meta.description as string,
          },
        ],
      })
    }
  })

  return router
}
