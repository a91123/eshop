<template>
  <div class="home">
    <top-carousel></top-carousel>
    <category-bar ref="categorybar"></category-bar>
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
    // 初始化 call api
    const pageActive = ref(1)
    store.dispatch('getProductList', { page: 1, category: 0 })
    const product = computed(() => { return store.state.ProductList })
    const hangdlePages = (item) => {
      pageActive.value = item
      window.scrollTo(0, 0)
      console.log(categorybar.value.category)
      store.dispatch('getProductList', { page: item, category: categorybar.value.category })
    }
    return {
      product,
      hangdlePages,
      categorybar,
      pageActive
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
