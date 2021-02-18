<template>
  <Form v-slot="{ errors }" @submit="onSubmit">
    <label for="email">email</label>
    <div class="form-group">
      <Field name="email" v-model="email" type="email" class="form-control" :rules="isEmailRules" />
      <span class="errorColor">{{ errors.email }}</span>
    </div>
    <div class="form-group">
      <label for="password">密碼</label>
      <Field
        name="password"
        v-model="password"
        class="form-control"
        autocomplete="on"
        type="password"
        :rules="isPasswordLength"
      />
      <span class="errorColor">{{ errors.password }}</span>
    </div>
    <slot></slot>
  </Form>
</template>
<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { useForm, Field, Form } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  components: {
    Field,
    Form
  },

  setup (props, context) {
    const { proxy } = getCurrentInstance()
    const store = useStore()
    const email = ref()
    const password = ref()
    const router = useRouter()
    const { handleSubmit } = useForm()
    const isEmailRules = (value) => {
      if (!emailReg.test(value)) {
        return '請輸入正確的email'
      }
      return true
    }
    const isPasswordLength = (value) => {
      if (!value || value.length < 6) {
        return '密碼至少要六個字!'
      }
      return true
    }
    const onSubmit = handleSubmit(() => {
      store.dispatch('getUserLogin', { email: email.value, password: password.value }).then(res => {
        // store.commit('handleDialogTableVisible', false)
        proxy.$message({
          message: '登入成功',
          type: 'success',
          showClose: true,
          duration: 1000
        })
        setTimeout(() => {
          router.push('/')
        }, 1000)
      })
    })
    return {
      isEmailRules,
      onSubmit,
      isPasswordLength,
      email,
      password
    }
  }
});
</script>
