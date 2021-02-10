<template>
  <div class="container" v-if="myCart.length===0&&active===0">沒有商品喔</div>
  <div class="row item-body" v-for="(item,index) in myCart" :key="item.id">
    <div class="product-detail">
      <img :src="item.image" alt />
      {{item.item}}
    </div>
    <div class="price">{{item.price}}</div>
    <div class="amount">
      <div class="countinput" :class="active===0 ? 'borders' : '' ">
        <div class="min" v-if="!order" @click="handleMin(item,index)">-</div>
        {{item.amount}}
        <div class="plus" v-if="!order" @click="handlePlus(item,index)">+</div>
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
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  emits: ['next'],
  props: ['active', 'order'],
  setup (props, context) {
    const myCart = computed(() => { return store.state.ProductCart })
    const store = useStore()
    const handlePlus = (item, index) => {
      item.amount += 1
      store.commit('handleAmount', { amount: item.amount, index })
    }
    const handleNext = () => {
      context.emit('next')
    }
    const total = computed(() => {
      return store.getters.getTotal
    })
    const handleMin = (item, index) => {
      item.amount -= 1
      store.commit('handleAmount', { amount: item.amount, index })
    }
    const delProduct = (index) => {
      myCart.value.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(myCart.value))
      store.state.buyCartAmount = myCart.value.length
    }
    return {
      handlePlus,
      handleMin,
      delProduct,
      myCart,
      total,
      handleNext
    }
  }
});
</script>
<style lang="scss" scoped>
img {
  width: 60px;
  height: 100%;
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
  .amount {
    background: white;
    .countinput {
      width: 50%;
      margin: 0 auto;
      text-align: center;

      div {
        width: 20px;
        cursor: pointer;
      }
      .min {
        border-right: 1px solid black;
      }
      .plus {
        border-left: 1px solid black;
      }
    }
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
    a:visited {
      color: white;
    }
  }
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
