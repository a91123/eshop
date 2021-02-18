<template>
  <div class="container main">
    <div class="row detail-container">
      <div class="col-md-12 col-lg-5 image-container">
        <img :src="list && list.image" alt />
      </div>
      <div class="col-md-12 col-lg-7 right-detail">
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
          <el-select class="col-6" v-model="size" @change="handleDisable" placeholder="請選擇尺寸">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="buy-now">
          <button
            :disabled="isDisable"
            type="button"
            class="btn"
            @click="setItemToBuycart"
          >{{size===undefined?'請選擇尺寸':'加入購物車'}}</button>
          <!-- <button class="btn" @click="handleRouter">前往結帳</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, ref, getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup () {
    const { proxy } = getCurrentInstance()
    const count = ref(1)
    const size = ref()
    const isDisable = ref(true)
    const cart = JSON.parse(localStorage.getItem('cart'))
    const buyList = {}
    const newCart = ref([])
    const mycart = []
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const options = ref([{
      value: 'S',
      label: 'S'
    }, {
      value: 'M',
      label: 'M'
    }, {
      value: 'L',
      label: 'L'
    }])
    const handlePlus = () => {
      count.value += 1
    }
    const handleMin = () => {
      if (count.value > 1) {
        count.value -= 1
      }
    }
    const open = () => {
      proxy.$message({
        message: '成功加入購物車!!',
        type: 'success',
        showClose: true
      })
    }
    const setItemToBuycart = () => {
      buyList.item = list.value.title
      buyList.price = list.value.price
      buyList.image = list.value.image
      buyList.amount = count.value
      buyList.id = list.value.id
      buyList.size = size.value
      if (cart && cart.length > 0) {
        const newiten = { ...buyList }
        mycart.push(newiten)
        newCart.value = [...cart, ...mycart]
      } else {
        const newiten = { ...buyList }
        newCart.value.push(newiten)
      }
      localStorage.setItem('cart', JSON.stringify(newCart.value))
      store.commit('getProductCart')
      open()
    }
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    const handleRouter = () => {
      router.push('/BuyCart')
    }
    const handleDisable = () => {
      isDisable.value = false
    }
    const currentId = route.params.id
    store.dispatch('getDetailList', currentId)
    const list = computed(() => {
      return store.state.DetailList
    })
    return {
      list,
      count,
      handlePlus,
      handleMin,
      buyList,
      setItemToBuycart,
      handleRouter,
      open,
      size,
      options,
      isDisable,
      handleDisable
    }
  }
});
</script>
<style lang="scss">
.el-input__inner {
  border: solid 1px rgb(138, 136, 136);
  color: black;
  @media (max-width: 992px) {
    width: 100%;
  }
}
</style>
