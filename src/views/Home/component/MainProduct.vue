<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-6 col-lg-4 product col-sm-6 col-xs-12"
        v-for="(item,index) in list"
        :key="index"
      >
        <div class="card">
          <div class="image-container">
            <img :src="item.image" class="card-img-top" />
          </div>
          <div class="card-body price">
            <h4 class="title">{{item.title}}</h4>
            <span>{{item.price}}</span>
          </div>
          <router-link :to="`/detail/${item.id}`" class="btn link-style">
            <i class="el-icon-shopping-cart-1"></i> 詳細介紹
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    list: Object
  }
});
</script>
