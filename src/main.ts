import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'

import App from '@/App.vue'
import { makeRouter } from '@/router'
import { headConfig } from '@/config/head'

import '@/styles/main.css'

const app = createApp(App)
const head = createHead(headConfig as object)
const pinia = createPinia()
const router = makeRouter(false)

app.use(pinia)
app.use(router)
app.use(head)

app.mount('#app')
