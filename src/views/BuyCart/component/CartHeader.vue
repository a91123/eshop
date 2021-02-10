<template>
  <div class="row item-header">
    <div class="header-item">商品名稱</div>
    <div class="price">單價</div>
    <div class="amount">數量</div>
    <div class="operate"></div>
  </div>
</template>
<style lang="scss" scoped>
.item-header {
  align-self: center;
  text-align: center;
  line-height: 30px;
  margin: 15px auto;
  padding-left: 15px;
  border: 1px solid rgb(158, 156, 156);
  border-radius: 3px;
  div {
    width: 16%;
  }
  .header-item {
    width: 50%;
    text-align: left;
  }
}
</style>
