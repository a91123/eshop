<template>
  <el-dialog v-model="dialogVisible"
    :append-to-body="true"
    :close-on-click-modal="true"
    width="30%"
    :modal="true"
    :show-close="true"
    :center="true">
    <slot></slot>
  </el-dialog>

</template>
<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  props: {
    toggledailog: Boolean
  },
  setup (props) {
    const dialogVisible = computed(() => { return props.toggledailog })
    // const dialogVisible = ref(context.props.toggleDialog || false)
    return {
      dialogVisible
    }
  }
});
</script>
<style scoped>
</style>
