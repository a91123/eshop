<template>
  <div class="container">
    <div class="row order col-12">
      <el-table
        class="col-12"
        :data="order"
        style="width: 100%"
        :fit="true"
        :highlight-current-row="true"
      >
        <el-table-column prop="createtime" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="product.total" label="總計"></el-table-column>
        <el-table-column prop="id" label="訂單編號"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" @click="handleId(scope.$index, scope.row)">詳細資料</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <diago-detail :close-on-click-modal="true" :append-to-body="true" title="訂單資訊" ref="dialog">
    <el-table
      max-height="500"
      class="col-12"
      :data="orderDetail"
      style="width: 100%"
      :highlight-current-row="true"
    >
      <el-table-column label="商品圖片" sortable width="180">
        <template v-slot="scope">
          <img :src="scope.row.image" alt style="width: 100px" />
        </template>
      </el-table-column>
    </el-table>
  </diago-detail>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import diagoDetail from '@/components/dialog.vue'

import axios from 'axios'

export default defineComponent({
  components: {
    diagoDetail
  },
  setup () {
    const dialog = ref(null)
    const route = useRoute()
    const detail = ref([])
    const currentId = route.params.id
    const order = ref()
    const orderDetail = ref()
    const handleId = (index, row) => {
      dialog.value.open()
      orderDetail.value = order.value[index].product.cart
    }
    axios.get(`/order/${currentId}`).then((res) => {
      console.log(res.data, '...')
      order.value = res.data
      // res.data.forEach((item) => {
      //   detail.value.push(...item.product.cart)
      // })
      console.log(res.data)
    })
    return {
      order,
      handleId,
      dialog,
      detail,
      orderDetail
    }
  }
});
</script>
<style scoped lang="scss">
.order {
  margin: 50px auto;
}
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
