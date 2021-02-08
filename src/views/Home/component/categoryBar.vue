<template>
  <div class="container">
    <nav>
      <li @click="handleCategory(0)">全部商品</li>
      <li @click="handleCategory(1)">個性上衣</li>
      <li @click="handleCategory(2)">潮流外套</li>
      <li @click="handleCategory(3)">經典褲款</li>
      <li @click="handleCategory(4)">百搭單品</li>
    </nav>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const category = ref(0)
    const handleCategory = (value) => {
      category.value = value
      store.commit('getProductCategory', value)
      console.log(category)
    }
    return {
      category,
      handleCategory
    }
  }
});
</script>
<style scoped lang="scss">
nav {
  width: 100%;
  float: left;
  display: flex;
  border-bottom: rgb(158, 156, 156) 1px solid;
  justify-content: space-around;
  margin: 15px auto;
  li {
    list-style: none;
    width: 10%;
    cursor: pointer;
    padding-left: 10px;
    line-height: 30px;
    text-align: center;
    margin: 15px;
    height: 30px;
  }
  li:hover {
    border-bottom: 1px red solid;
  }
}
</style>
