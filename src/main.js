import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Boostrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './routes'

createApp(App).use(Boostrap).use(router).mount('#app')
