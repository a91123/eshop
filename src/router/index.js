import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Detail from '@/views/DetailProduct/Detail.vue'
import BuyCart from '@/views/BuyCart/BuyCart.vue'
import singUp from '../views/signUp/signUp.vue'
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
    path: '/signUp',
    name: 'signUp',
    component: singUp
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
