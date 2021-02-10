import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus, { ElLoading } from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router'
import store from './store'
axios.defaults.baseURL = 'http://localhost:3000/'// 默認的網址
// axios攔截器 每次發req就觸發
const loading = ElLoading.service({
  fullscreen: true,
  lock: true,
  text: '讀取中'
});
axios.interceptors.request.use((config) => {
  // setError 然後在app watch error如果ajax錯誤就觸發message
  store.commit('setError', { status: false, message: '' })
  // 一發ajax 就進入加載狀態
  // eslint-disable-next-line no-unused-expressions
  loading
  return config
})
axios.interceptors.response.use((config) => {
  // 收到res之後關閉loading
  setTimeout(() => {
    loading.close()
  }, 1000)
  return config
}, e => {
  const { error } = e.response.data
  // 攔截到失敗也要關掉
  loading.close()
  store.commit('setError', { status: true, message: error })
  return Promise.reject(error)
}
)
createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
