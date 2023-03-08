import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './pages/routes.js'
import App from './App.vue'
import './style.css'

const store = createPinia()
const app = createApp(App)
app.use(router).use(store).mount('#app')