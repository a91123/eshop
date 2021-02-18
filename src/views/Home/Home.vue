<template>
  <div class="home">
    <top-carousel></top-carousel>
    <category-bar ref="categorybar"></category-bar>
    <div class="container search">
      <input type="text" placeholder="搜索" v-model="search" />
      <i @click="handleSearch" class="el-icon-search"></i>
    </div>

    <div class="main-product">
      <main-product :list="product.rows"></main-product>
    </div>
    <div class="container">
      <nav class="page">
        <ul class="pagination">
          <li class="page-item" v-for="(item,index) in product.pages" :key="index">
            <span
              class="page-link"
              :class="item===pageActive? 'active' : ''"
              @click="hangdlePages(item)"
            >{{item}}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import TopCarousel from './component/TopCarousel.vue'
import MainProduct from './component/MainProduct.vue'
import categoryBar from './component/categoryBar.vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { defineComponent, computed, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    TopCarousel,
    MainProduct,
    categoryBar
  },
  setup () {
    const categorybar = ref(null)
    const store = useStore()
    const search = ref()
    // 初始化 call api
    const pageActive = ref(1)
    store.dispatch('getProductList', { page: 1, category: 0 })
    const product = computed(() => { return store.state.ProductList })
    const handleSearch = () => {
      axios.get(`/search/${search.value}`).then(res => { store.commit('getSearch', res.data) })
    }
    const hangdlePages = (item) => {
      pageActive.value = item
      window.scrollTo(0, 0)
      store.dispatch('getProductList', { page: item, category: categorybar.value.category })
    }
    return {
      product,
      hangdlePages,
      categorybar,
      pageActive,
      search,
      handleSearch
    }
  }
});
</script>
<style scoped lang="scss">
.pagination {
  justify-content: center;
  margin-top: 20px;
}
.active {
  background: #007bff;
  color: white;
}
</style>
<style >
.el-icon-search {
  cursor: pointer;
  font-size: 20px;
  align-self: center;
  margin-left: 10px;
}
</style>
