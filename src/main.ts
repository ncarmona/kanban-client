import { createApp } from 'vue'
import Router from './core/router'
import store from './store/store'

import App from './App.vue'
import './assets/tailwind.css'

createApp(App)
.use(store)
.use(Router)
.mount('#app')
