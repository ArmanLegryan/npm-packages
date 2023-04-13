import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios'

axios.defaults.baseURL = 'https://registry.npmjs.org/-/v1/'

createApp(App).use(store).mount('#app')
