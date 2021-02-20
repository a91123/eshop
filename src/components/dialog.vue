<template>
  <div class="dialog">
    <el-dialog
      :destroy-on-close="true"
      :title="title"
      :width="dialogWidth"
      :center="true"
      v-model="dialogTableVisible"
    >
      <slot></slot>
    </el-dialog>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue'
// import { useStore } from 'vuex'
export default defineComponent({
  props: {
    title: String,
    width: String
  },
  setup (props, context) {
    const dialogWidth = ref('500px')
    const dialogTableVisible = ref(false)
    const close = () => {
      dialogTableVisible.value = false
    }
    const open = () => {
      dialogTableVisible.value = true
    }
    // rwd dialog框
    const setDialogWidth = () => {
      const defaultWidth = 500
      const val = document.body.clientWidth
      if (val < defaultWidth) {
        dialogWidth.value = '100%'
      } else {
        dialogWidth.value = '500px'
      }
    }
    onMounted(() => {
      setDialogWidth()
    })
    window.onresize = () => {
      setDialogWidth()
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
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: -50px;
  z-index: 99;
  width: 100%;
}
</style>
