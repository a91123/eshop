<template>
  <div class="mt-5">
    <signup-from></signup-from>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import signupFrom from './signUpFrom.vue'
export default defineComponent({
  components: {
    signupFrom
  }
});
</script>
