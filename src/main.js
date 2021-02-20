import { createApp } from 'vue'
import App from './App.vue'
// ElLoading 引入 如果要LOADING
import ElementPlus, { ElLoading } from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import router from './router'
import store from './store'
let loading
const startLoading = () => {
  loading = ElLoading.service({
    fullscreen: true,
    lock: true,
    text: '讀取中'
  });
}
const endLoading = () => {
  loading.close()
}

axios.defaults.baseURL = 'https://tomshop2021.herokuapp.com/'// 默認的網址
// axios攔截器 每次發req就觸發

axios.interceptors.request.use((config) => {
  // setError 然後在app watch error如果ajax錯誤就觸發message
  store.commit('setError', { status: false, message: '' })

  // 一發ajax 就進入加載狀態
  // eslint-disable-next-line no-unused-expressions
  startLoading()
  return config
})
axios.interceptors.response.use((config) => {
  endLoading()
  return config
}, e => {
  const { error } = e.response.data
  // 攔截到失敗也要關掉
  endLoading()
  // 把error設定給 message讓彈出框好使用
  store.commit('setError', { status: true, message: error })
  return Promise.reject(error)
}
)
createApp(App)
  .use(store)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
