import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

import './assets/scss/style.scss'
import './assets/css/style.css'
import './assets/css/screen.css'

createApp(App)
    .use(router)
    .mount('#app')