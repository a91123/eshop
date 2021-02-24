<template>
  <div class="container">
    <payment-step class="mt-5" :active="active"></payment-step>
    <cart-header v-if="active===0||active===2"></cart-header>
  </div>
  <div class="container">
    <cart-body ref="cartRef" v-if="active===0" @next="next" :active="active"></cart-body>
  </div>
  <signup-from ref="order" :user="user" v-if="active===1"></signup-from>
  <order-detail v-if="active===2"></order-detail>
  <div class="paymentButton">
    <button v-if="active!==0 && active<3" @click="pre">上一步</button>
    <button v-if="active===1" @click="checkOrder">確認</button>
    <button v-if="active===2" @click="sendOrder">送出訂單</button>
  </div>
</template>
<script>
import { computed, defineComponent, ref, reactive, getCurrentInstance } from 'vue'
import SignupFrom from '../signUp/signUpFrom.vue'
import CartHeader from './component/CartHeader.vue'
import OrderDetail from './component/Order-Detail'
import PaymentStep from './component/PaymentStep'
import CartBody from './component/CartBody.vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    CartHeader,
    OrderDetail,
    PaymentStep,
    CartBody,
    SignupFrom
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const router = useRouter()
    const order = ref()
    const store = useStore()
    const cartRef = ref(null)
    const active = ref(0)
    const orderPayload = reactive({})
    const user = computed(() => {
      return store.state.user
    })
    const cart = computed(() => {
      return store.state.ProductCart
    })
    const next = () => {
      active.value++
      console.log(active.value)
    }
    const sendOrder = () => {
      const payload = [JSON.stringify({ cart: cart.value, total: store.getters.getTotal }), { orderPayload }]
      console.log(store.getters.getTotal)
      axios.post('order', payload).then((res) => {
        proxy.$message({
          message: res.data.msg,
          type: 'success',
          showClose: true,
          duration: 1000
        })
        localStorage.removeItem('cart')
        store.commit('DelCart', [])
        store.state.buyCartAmount = ''
        router.push('/')
      })
      console.log([{ cart: cart.value, total: store.getters.getTotal }, { orderPayload }])
    }
    const checkOrder = () => {
      console.log(cartRef)
      active.value++
      orderPayload.email = order.value.email
      orderPayload.name = order.value.name
      orderPayload.address = order.value.address
      orderPayload.phone = '0' + order.value.phone
      orderPayload.uid = user.value.uid
      console.log(orderPayload)
    }
    const pre = () => {
      active.value--
      if (active.value < 0) {
        active.value = 0
      }
    }
    store.commit('getProductCart')
    return {
      active,
      next,
      pre,
      order,
      checkOrder,
      user,
      sendOrder,
      cartRef
    }
  }
});
</script>
