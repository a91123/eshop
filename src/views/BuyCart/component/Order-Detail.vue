<template>
  <div class="container">
    <cart-body :order="true"></cart-body>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import CartBody from './CartBody.vue'
export default defineComponent({
  components: {
    CartBody
  }
});
</script>
