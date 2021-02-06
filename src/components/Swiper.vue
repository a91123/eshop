<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
      <div class="swiper-pagination"></div>
      <div class="navigation"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Navigation, Pagination])
export default defineComponent({
  setup () {
    onMounted(() => {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 50,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
  }

});
</script>
<style scoped lang="scss">
.swiper-container{
  height: 700px;
.swiper-wrapper img{
   width: 100%;
   object-fit: cover;
}
}
</style>
