<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 product col-sm-6 col-xs-12"
        v-for="(item,index) in list"
        :key="index">
        <div class="card">
          <div class="image-container">
            <img :src="item.image"
              class="card-img-top">
          </div>
          <div class="card-body price">
            <h4 class="title">{{item.title}}</h4>
            <span>{{item.price}}</span>
          </div>
          <router-link :to="`/detail/${item.id}`"
            class="btn link-style"><i class="el-icon-shopping-cart-1"></i> 詳細介紹</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { product } from '@/../TestData.js'
export default defineComponent({
  setup () {
    const store = useStore()
    store.dispatch('getProductList')
    const list = computed(() => { return store.state.ProductList })
    return {
      product,
      list
    }
  }
});
</script>
<style scoped lang="scss">
.product{
  margin: 10px 0px;
  .card{
    width: 18rem;
    margin: 0 auto;
  .image-container{
  overflow: hidden;
  img{
    max-height: 350px;
    object-fit: cover;
    transform:scale(1,1);transition: all 0.2s ease-out;
  }
  img:hover{transform:scale(1.1);}
  }}

  .price{
    display: flex;
    justify-content: space-between;
    .title{
     font-weight: bold;
    }
  }
  .link-style{
    background-color: rgb(76, 74, 83);
    color:whitesmoke;
    font-weight: bold;
  }
}
</style>
