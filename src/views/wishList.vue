<template>
  <div class="container">
    <h2 class="title mt-5">我的收藏</h2>
    <main-product v-if="myWish.length!==0" :list="myWish"></main-product>
    <div v-else class="default">
      <i class="el-icon-goods"></i>
      <div>沒有收藏的商品唷</div>
      <button @click="$router.back()" class="btn btn-dark rounded-0 text-white my-2">返回上一頁</button>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import MainProduct from './Home/component/MainProduct.vue'
export default defineComponent({
  components: {
    MainProduct
  },
  setup (props) {
    const store = useStore()
    const product = ref([])
    const wishlist = computed(() => {
      return store.state.wishList
    })
    const myWish = computed(() => {
      return product.value.filter((item) => {
        return wishlist.value.indexOf(item.id) !== -1
      })
    })
    axios.get('/wish').then((res) => {
      product.value = res.data
    })
    return {
      wishlist,
      myWish
    }
  }

});
</script>
<style scope lang="scss">
.title {
  text-align: center;
  margin-top: 15px;
}
/* .el-icon-goods {
  font-size: 50px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
} */
.default {
  .el-icon-goods {
    font-size: 50px;
  }
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
</style>
