<template>
  <div class="home">
    <top-carousel></top-carousel>
    <category-bar></category-bar>
    <div class="main-product">
      <main-product :list="list"></main-product>
    </div>
  </div>
</template>
<script>
import TopCarousel from './component/TopCarousel.vue'
import MainProduct from './component/MainProduct.vue'
import categoryBar from './component/categoryBar.vue'
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    TopCarousel,
    MainProduct,
    categoryBar
  },
  setup () {
    const store = useStore()
    store.dispatch('getProductList', 0)
    const list = computed(() => { return store.state.categoryProduct })
    return {
      list
    }
  }
});
</script>
<style scoped lang="scss">
.main-product {
  margin: 20px 0px;
}
</style>
