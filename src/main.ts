import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import { makeRouter } from '@/router'

import '@/styles/main.css'

const app = createApp(App)
const router = makeRouter(false)

app.use(createPinia())
app.use(router)

app.mount('#app')
