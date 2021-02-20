<template>
  <div class="container">
    <div class="row order col-12">
      <el-table
        :border="true"
        class="col-12"
        :data="order"
        style="width: 100%"
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
  <diago-detail title="訂單資訊" ref="dialog">
    <el-table
      empty-text="你沒有訂單喔 開始採購吧"
      :border="true"
      class="col-12"
      :data="orderDetail"
      max-height="500"
      style="width: 100%"
    >
      <el-table-column label="商品圖片" width="180">
        <template v-slot="scope">
          <img :src="scope.row.image" style="width: 100% ; height:100% " />
        </template>
      </el-table-column>
      <el-table-column prop="price" label="價格"></el-table-column>
      <el-table-column prop="amount" label="數量"></el-table-column>
      <el-table-column prop="size" label="尺寸"></el-table-column>
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
      order.value = res.data
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
