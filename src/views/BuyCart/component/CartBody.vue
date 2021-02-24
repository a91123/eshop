<template>
  <div class="container" v-if="myCart.length===0&&active===0">沒有商品喔</div>
  <div class="row item-body" v-for="(item,index) in myCart" :key="item.id">
    <div class="product-detail">
      <img :src="item.image" />
      {{item.item}}
    </div>
    <div class="size">{{item.size}}</div>
    <div class="price">{{item.price}}</div>
    <div class="amount">
      <div class="countinput" :class="active===0 ? 'borders' : '' ">
        <div class="min" v-if="!order" @click="handleAmount(item,index,-1)">-</div>
        <span class="count-number">{{item.amount}}</span>

        <div class="plus" v-if="!order" @click="handleAmount(item,index,1)">+</div>
      </div>
    </div>
    <div class="operate" v-if="!order" @click="delProduct(index)">
      <i class="el-icon-close"></i>
    </div>
  </div>
  <div class="container total" v-if="myCart.length>0">
    <div v-if="active!==1" :class="{'counts-step':order}" class="counts">總計${{total}}</div>
    <button v-if="active===0" @click="handleNext">結帳去</button>
  </div>
</template>
<script>
import { defineComponent, computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  emits: ['next'],
  props: ['active', 'order'],
  setup (props, context) {
    const { proxy } = getCurrentInstance()
    const myCart = computed(() => {
      return store.state.ProductCart
    })
    const store = useStore()
    const cart = JSON.parse(localStorage.getItem('cart'))
    const handleAmount = (item, index, count) => {
      item.amount += count
      cart[index].amount = item.amount
      if (item.amount < 1) {
        cart.splice(index, 1)
        store.commit('DelCart', cart)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      store.commit('handleBuyCartAmount', count)
    }
    const handleNext = () => {
      const user = store.state.user
      if (user.isLogin === true) {
        context.emit('next')
      } else {
        proxy.$message({
          message: '請先登入在結帳喔',
          type: 'error',
          showClose: true,
          duration: 1000
        })
      }
    }
    const total = computed(() => {
      return store.getters.getTotal
    })
    const delProduct = (index) => {
      myCart.value.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(myCart.value))
      store.state.buyCartAmount = myCart.value.length
    }
    return {
      handleAmount,
      delProduct,
      myCart,
      total,
      handleNext
    }
  }
});
</script>
<style scoped>
img {
  width: 100px;
}
</style>
<style >
.borders {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.counts-step {
  width: 30%;
}
</style>
