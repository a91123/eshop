<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 product col-md-6 col-12" v-for="(item,index) in list" :key="index">
        <div class="card" :ref="setCardRef">
          <div class="image-container">
            <svg
              @click.prevent="handlefav(item.id,index)"
              v-if="favSvg.indexOf(item.id)===-1"
              class="fav"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>favorite_outline</title>
              <path
                d="M12.094 18.563q2.25-2.016 3.328-3.047t2.344-2.438 1.758-2.484 0.492-2.109q0-1.5-1.008-2.484t-2.508-0.984q-1.172 0-2.18 0.656t-1.383 1.688h-1.875q-0.375-1.031-1.383-1.688t-2.18-0.656q-1.5 0-2.508 0.984t-1.008 2.484q0 1.031 0.492 2.109t1.758 2.484 2.344 2.438 3.328 3.047l0.094 0.094zM16.5 3q2.344 0 3.914 1.594t1.57 3.891q0 1.359-0.516 2.648t-1.898 2.883-2.508 2.672-3.609 3.328l-1.453 1.313-1.453-1.266q-3.234-2.906-4.664-4.359t-2.648-3.422-1.219-3.797q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109z"
              />
            </svg>
            <svg
              @click.prevent="handlefav(item.id,index)"
              class="fav"
              v-if="favSvg.includes(item.id)"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>favorite</title>
              <path
                d="M12 21.328l-1.453-1.313q-2.484-2.25-3.609-3.328t-2.508-2.672-1.898-2.883-0.516-2.648q0-2.297 1.57-3.891t3.914-1.594q2.719 0 4.5 2.109 1.781-2.109 4.5-2.109 2.344 0 3.914 1.594t1.57 3.891q0 1.828-1.219 3.797t-2.648 3.422-4.664 4.359z"
              />
            </svg>
            <img @click="$router.push(`/detail/${item.id}`)" :src="item.image" class="card-img-top" />
          </div>
          <div class="cart-title price">
            <span
              style="cursor: pointer; font-weight:bold;"
              @click="$router.push(`/detail/${item.id}`)"
            >{{item.title}}</span>
            <span>{{item.price}}</span>
          </div>
          <!-- <router-link :to="`/detail/${item.id}`" class="btn link-style">
            <i class="el-icon-shopping-cart-1"></i> 詳細介紹
          </router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    list: Object
  },
  setup (props) {
    const card = ref([])
    //   var io = new IntersectionObserver(entry => {
    //   // 1.建立一個觀察容器
    //   // 2.foreach每個entry並添加動畫
    //   entry.forEach(item => {
    //     if (item.isIntersecting) {
    //       item.target.classList.add('fade-in')
    //     }
    //   })
    // })
    const io = new IntersectionObserver(entry => {
      // 1.建立一個觀察容器
      // 2.foreach每個entry並添加動畫
      // https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E8%AA%8D%E8%AD%98-intersection-observer-api-%E5%AF%A6%E4%BD%9C-lazy-loading-%E5%92%8C-infinite-scroll-c8d434ad218c
      entry.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('fade-in')
          io.unobserve(entry.target)
        }
      })
    })
    const setCardRef = (el) => {
      if (el) {
        io.observe(el)
        // vue3官方推薦 ref array方法 // 指定ref為setxxx 再把他push到 陣列中形成ref陣列
        // 先為每個el監聽一個已經建好的io容器 再把她推入陣列
        card.value.push(el)
      }
    }
    const store = useStore()
    const favSvg = computed(() => {
      return store.state.wishList
    })
    const handlefav = (id) => {
      store.commit('wishList', id)
    }
    return {
      handlefav,
      favSvg,
      card,
      setCardRef
    }
  }
});
</script>
<style scoped>
@keyframes fadein {
  0% {
    top: -20px;
    opacity: 0.5;
  }
  50% {
    top: -10px;
    opacity: 0.6;
  }
  70% {
    top: -5px;
    opacity: 0.8;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}

.fade-in {
  animation-name: fadein;
  animation-duration: 0.2s;
  animation-timing-function: ease-in;
}
</style>
