<template>
  <eshop-header :user="user"></eshop-header>
  <router-view></router-view>
</template>
<script>
import EshopHeader from './components/Header.vue'
import { defineComponent, computed, onMounted, watch, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
export default defineComponent({
  components: {
    EshopHeader
  },
  setup () {
    const { proxy } = getCurrentInstance()
    const error = computed(() => { return store.state.error })
    const store = useStore()
    const token = computed(() => { return store.state.token })
    const currentUser = computed(() => { return store.state.user })
    onMounted(() => {
      if (!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common.authorization = token.value
        store.dispatch('fetchCurrentUser')
      }
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
    store.dispatch('fetchCurrentUser')
    return {
      user: currentUser
    }
  }
});
</script>
<style lang="scss">
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  body {
    background-color: #fdfdfd;
  }
}
</style>
