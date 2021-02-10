<template>
  <el-dialog :title="title" :width="dialogWidth" v-model="dialogTableVisible">
    <slot></slot>
  </el-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue'
// import { useStore } from 'vuex'
export default defineComponent({
  props: {
    title: String
  },
  setup (props, context) {
    // const store = useStore()
    const dialogWidth = ref('450px')
    const dialogTableVisible = ref(false)
    const close = () => {
      dialogTableVisible.value = false
    }
    const open = () => {
      dialogTableVisible.value = true
    }
    return {
      dialogTableVisible,
      dialogWidth,
      open,
      close
    }
  }
});
</script>
<style scoped>
</style>
