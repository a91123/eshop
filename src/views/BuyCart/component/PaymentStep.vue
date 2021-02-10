<template>
  <el-steps :active="active" finish-status="success">
    <el-step title="購物車"></el-step>
    <el-step title="個人資訊"></el-step>
    <el-step title="完成"></el-step>
  </el-steps>
</template>
<script>
export default {
  props: ['active']
}
</script>
