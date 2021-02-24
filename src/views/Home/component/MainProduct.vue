<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 product col-md-6 col-12" v-for="(item,index) in list" :key="index">
        <div class="card">
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
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    list: Object
  },
  setup (props) {
    const store = useStore()
    const favSvg = computed(() => {
      return store.state.wishList
    })
    const handlefav = (id) => {
      store.commit('wishList', id)
    }
    return {
      handlefav,
      favSvg
    }
  }
});
</script>
