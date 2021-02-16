import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Detail from '@/views/Detail.vue'
import BuyCart from '@/views/BuyCart/BuyCart.vue'
import singUp from '../views/signUp/signUp.vue'
import MyOrder from '@/views/MyOrder.vue'
import store from '@/store'
import axios from 'axios'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/MyOrder/:id',
    name: 'MyOrder',
    component: MyOrder,
    meta: { requiredLogin: true }
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: singUp,
    meta: { redirectAlreadyLogin: true }
  },
  {
    path: '/BuyCart',
    name: 'BuyCart',
    component: BuyCart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
router.beforeEach((to, from, next) => {
  const { user } = store.state
  const { token } = store.state
  const { redirectAlreadyLogin, requiredLogin } = to.meta
  if (user.isLogin === false) {
    if (token) {
      axios.defaults.headers.common.authorization = token
      store.dispatch('fetchCurrentUser').then(() => {
        if (redirectAlreadyLogin) {
          next('/')
        } else {
          next()
        }
      }).catch(e => {
        store.commit('logout')
      })
    } else {
      if (requiredLogin) {
        next('/')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})
