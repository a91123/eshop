<template>
  <swiper
    :autoplay="swiperoptions.autoplay"
    :pagination="swiperoptions.pagination"
    :loop="swiperoptions.loop"
  >
    <swiper-slide v-for="(list,index) in Product" :key="index">
      <img :src="list" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.scss'
SwiperCore.use([Autoplay, Pagination])
export default defineComponent({
  name: 'TopCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const Product = ref([
      ' https://tomshop2021.herokuapp.com//p360.jpg',
      ' https://tomshop2021.herokuapp.com//p320.jpg',
      ' https://tomshop2021.herokuapp.com//p34.jpg'
    ])
    const swiperoptions = reactive({
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      speed: 1000,
      pagination: {
        clickable: true
      }
    })
    return {
      Product,
      swiperoptions
    }
  }
});
</script>
