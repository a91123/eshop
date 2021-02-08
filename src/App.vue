<template>
  <eshop-header :user="user">
    <div>123456789</div>
  </eshop-header>
  <div></div>
  <router-view></router-view>
</template>
<script>
import EshopHeader from './components/Header.vue'
import { defineComponent, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
export default defineComponent({
  components: {
    EshopHeader
  },
  setup () {
    const store = useStore()
    const token = computed(() => { return store.state.token })
    const currentUser = computed(() => { return store.state.user })
    onMounted(() => {
      if (!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common.authorization = token.value
        store.dispatch('fetchCurrentUser')
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
