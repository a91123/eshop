import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router'
import store from './store'
axios.defaults.baseURL = 'http://localhost:3000/'// 默認的網址
createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
