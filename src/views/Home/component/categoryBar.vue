<template>
  <div class="container category">
    <nav>
      <li @click="handleCategory(0)">全部商品</li>
      <li @click="handleCategory(1)">潮流外套</li>
      <li @click="handleCategory(2)">個性上衣</li>
      <li @click="handleCategory(3)">經典褲款</li>
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
      store.dispatch('getProductList', { category: value })
    }
    return {
      handleCategory,
      category
    }
  }
});
</script>
