<template>
  <div class="container">
    <div class="row item-header">
      <div class="header-item">商品名稱</div>
      <div class="price">單價</div>
      <div class="amount">數量</div>
      <div class="operate">移除</div>
    </div>
  </div>
  <div class="container" v-if="myCart.length>0">
    <div class="row item-body" v-for="(item,index) in myCart" :key="item.id">
      <div class="product-detail">
        <img :src="item.image" alt />
        {{item.item}}
      </div>
      <div class="price">{{item.price}}</div>
      <div class="amount">
        <button @click="handleMin(item,index)">-</button>
        {{item.amount}}
        <button @click="handlePlus(item,index)">+</button>
      </div>
      <div class="operate" @click="delProduct(index)">
        <i class="el-icon-close"></i>
      </div>
    </div>
  </div>
  <div class="container" v-else>沒有商品喔</div>
  <div class="container total" v-if="myCart.length>0">
    <div class="counts">總計${{total}}</div>
    <button>結帳去</button>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup () {
    const store = useStore()
    const cart = JSON.parse(localStorage.getItem('cart'))
    const total = computed(() => {
      let sum = 0
      myCart.value.forEach((item) => { sum += (item.price * item.amount) })
      return sum
    })
    const myCart = computed(() => { return store.state.ProductCart })
    const handlePlus = (item, index) => {
      item.amount += 1
      store.commit('handleAmount', { amount: item.amount, index })
    }
    const handleMin = (item, index) => {
      item.amount -= 1
      store.commit('handleAmount', { amount: item.amount, index })
    }
    const delProduct = (index) => {
      myCart.value.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(myCart.value))
      store.state.buyCartAmount = myCart.value.length
    }
    store.commit('getProductCart')
    return {
      handlePlus,
      handleMin,
      delProduct,
      myCart,
      cart,
      total
    }
  }
});
</script>
<style scoped lang="scss">
img {
  width: 60px;
  height: 100%;
}
.item-header {
  align-self: center;
  text-align: center;
  line-height: 30px;
  margin: 15px auto;
  padding-left: 15px;
  border: 1px solid rgb(158, 156, 156);
  border-radius: 3px;
  div {
    width: 16%;
  }
  .header-item {
    width: 50%;
    text-align: left;
  }
}
.item-body {
  align-items: center;
  border-radius: 3px;
  border: 1px solid rgb(158, 156, 156);
  margin: 15px auto;
  text-align: center;
  div {
    width: 16%;
  }
  .product-detail {
    display: flex;
    width: 50%;
    font-size: 15px;
    align-items: center;
    img {
      margin-right: 15px;
    }
  }
  .amount button {
    width: 15%;
    background: white;
    border-radius: 3px;
  }
  .operate {
    i {
      cursor: pointer;
    }
  }
}
.total {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 30px;
  .counts {
    font-size: 18px;
  }
  button {
    margin-left: 15px;
    background-color: #212529;
    color: white;
    width: 15%;
    font-weight: bold;
  }
}
</style>
