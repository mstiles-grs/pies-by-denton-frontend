import { createApp } from 'vue'
import { createPinia } from 'pinia'

import createMyRouter from '@/pages/routes.js'
import App from './App.vue'
import './style.css'

const store = createPinia()
const router = createMyRouter()
const app = createApp(App)

app.use(router).use(store).mount('#app')