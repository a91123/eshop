<template>
  <eshop-header>
    <div>123456789</div>
  </eshop-header>
  <router-view></router-view>
</template>
<script>
import EshopHeader from './components/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    EshopHeader
  }
});
</script>
<style lang="scss">
html{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  body{
    background-color:#fdfdfd;
  }
}
</style>
