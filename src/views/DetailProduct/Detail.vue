<template>
  <div class="container">
    <div class="row detail-container">
      <div class="col-md-5 image-container">
        <img :src="list && list.image" alt />
      </div>
      <div class="col-md-7 right-detail">
        <h2 class="product-title">{{ list.title }}</h2>
        <div class="descript">{{ list.descript }}</div>
        <div class="price">
          <span class="twd">TWD$</span>
          <span class="count">{{ list.price }}</span>
        </div>
        <div class="chose">
          <div class="buy-count">
            <div class="buy-i" @click="handleMin">
              <i class="el-icon-arrow-down"></i>
            </div>
            <span class="buy-number">{{count}}</span>
            <div class="buy-i" @click="handlePlus">
              <i class="el-icon-arrow-up"></i>
            </div>
          </div>
        </div>
        <div class="buy-now">
          <button type="button" class="btn" @click="setItemToBuycart">加入購物車</button>
          <button class="btn" @click="handleRouter">前往結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup () {
    const count = ref(1)
    const cart = JSON.parse(localStorage.getItem('cart'))
    const buyList = [{}]
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const handlePlus = () => {
      count.value += 1
    }
    const handleMin = () => {
      if (count.value > 1) {
        count.value -= 1
      }
    }
    const setItemToBuycart = () => {
      buyList[0].item = list.value.title
      buyList[0].price = list.value.price
      buyList[0].image = list.value.image
      buyList[0].amount = count.value
      buyList[0].id = list.value.id
      console.log(buyList)
      let newCart = []
      if (cart) {
        newCart = [...cart, ...buyList]
      } else {
        newCart = buyList
      }
      localStorage.setItem('cart', JSON.stringify(newCart))
      store.commit('getProductCart')
    }
    const handleRouter = () => {
      router.push('/BuyCart')
    }
    const currentId = route.params.id
    store.dispatch('getDetailList', currentId)
    const list = computed(() => {
      return store.state.DetailList
    })
    console.log(list)
    return {
      list,
      count,
      handlePlus,
      handleMin,
      buyList,
      setItemToBuycart,
      handleRouter
    }
  }
});
</script>
<style scoped lang="scss">
.detail-container {
  max-width: 80%;
  margin: 50px auto;
  .image-container img {
    width: 100%;
    object-fit: cover;
  }
  .right-detail {
    .product-title {
      margin-top: 15px;
      padding-bottom: 10px;
      padding-left: 15px;
      position: relative;
    }
    .product-title::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 2px;
      height: 36px;
      width: 10px;
      background-color: rgb(65, 78, 100);
    }
    .descript {
      margin: 20px 0px;
      font-size: 18px;
      color: #666;
      line-height: 1.6;
    }
    .price {
      position: relative;
      color: red;
      margin: 20px 0px;
      .twd {
        font-size: 15px;
      }
      .count {
        font-size: 30px;
      }
    }
    .price::after {
      position: absoult;
      display: block;
      margin: 15px 0px;
      content: "";
      width: 100%;
      height: 0px;
      border-bottom: 1px solid rgb(233, 216, 216);
      bottom: 0px;
    }
    .buy-count {
      border: solid 1px rgb(59, 58, 58);
      border-radius: 5px;
      width: 40%;
      display: flex;
      font-size: 18px;
      line-height: 44px;
      align-self: center;
      .buy-i {
        width: 33%;
        cursor: pointer;
        background-color: rgb(59, 58, 58);
        text-align: center;
        i {
          color: white;
        }
      }
      .buy-number {
        width: 64%;
        align-self: center;
        text-align: center;
        margin: 0px 20px;
      }
    }
    .buy-now {
      display: flex;
      button {
        background-color: #212529;
        color: white;
        width: 50%;
        margin-top: 30px;
        margin-right: 15px;
        font-weight: bold;
        a {
          text-decoration: none;
        }
        a:visited {
          color: white;
        }
      }
    }
  }
}
</style>
