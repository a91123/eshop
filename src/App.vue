<template>
  <eshop-header :user="user"></eshop-header>
  <div class="down" :style="{minHeight: Height+'px'}">
    <router-view></router-view>
  </div>
  <eshop-footer></eshop-footer>
</template>
<script>
import EshopHeader from './components/Header.vue'
import EshopFooter from './components/footer.vue'
import { defineComponent, computed, onMounted, watch, getCurrentInstance, ref } from 'vue'
import { useStore } from 'vuex'
// import axios from 'axios'
export default defineComponent({
  components: {
    EshopHeader,
    EshopFooter
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const error = computed(() => { return store.state.error })
    const store = useStore()
    const Height = ref(0)
    // const token = computed(() => { return store.state.token })
    const currentUser = computed(() => { return store.state.user })
    onMounted(() => {
      // 解決foot 內容不夠撐開的問題 class down = 讓down minheight = 最少等於整個body - (footer + header高度 -down的整體下降70)
      Height.value = document.body.clientHeight - 50
      window.onresize = () => { Height.value = document.documentElement.clientHeight - 50 }
      // if (!currentUser.value.isLogin && token.value) {
      //   axios.defaults.headers.common.authorization = token.value
      //   store.dispatch('fetchCurrentUser')
      // }
    })
    watch(() => error.value.status, () => {
      const { status, message } = error.value
      if (status && message) {
        proxy.$message({
          message: message,
          type: 'error',
          showClose: true,
          duration: 1000
        })
      }
    })
    return {
      user: currentUser,
      Height
    }
  }
});
</script>

<style lang="scss">
@import "./assets/scss/component/all.scss";
</style>
<style scoped>
.down {
  padding-top: 70px;
}
</style>
