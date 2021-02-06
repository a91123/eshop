<template>
  <div class="home">
    <!-- <top-carousel>
    </top-carousel> -->
    <div class="main-product">
      <main-product></main-product>
    </div>
  </div>
</template>
<script>
// import TopCarousel from './component/TopCarousel.vue'
import MainProduct from './component/MainProduct.vue'
export default {
  name: 'Home',
  components: {
    // TopCarousel,
    MainProduct
  }
};
</script>
<style scoped lang="scss">
.main-product{
  margin: 20px 0px;
}
</style>
