import { createApp } from 'vue'
import Router from './core/router'

import App from './App.vue'
import './assets/tailwind.css'

createApp(App)
.use(Router)
.mount('#app')
