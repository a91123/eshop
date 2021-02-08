<template>
  <el-dialog :title="title" :width="dialogWidth" v-model="dialogTableVisible">
    <slot></slot>
  </el-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    title: String
  },
  setup (props, context) {
    const dialogWidth = ref('450px')
    const dialogTableVisible = ref(false)
    const displayDialog = () => {
      dialogTableVisible.value = true
    }
    const displayNoneDialog = () => {
      dialogTableVisible.value = false
    }
    return {
      dialogTableVisible,
      displayDialog,
      displayNoneDialog,
      dialogWidth
    }
  }
});
</script>
<style scoped>
</style>
