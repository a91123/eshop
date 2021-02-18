<template>
  <div class="container">
    <div class="from-container">
      <Form v-slot="{ errors }" @submit="onSubmit">
        <div class="form-group">
          <label for="name">姓名</label>
          <Field type="text" name="name" :rules="isRequires" v-model="name" class="form-control" />
          <span>{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="email">email</label>
          <Field
            type="email"
            name="email"
            :rules="isEmailRules"
            v-model="email"
            class="form-control"
          />
          <span>{{ errors.email }}</span>
        </div>
        <div v-if="!user" class="form-group">
          <label for="password">password</label>
          <Field
            type="password"
            name="password"
            autocomplete="on"
            :rules="isPasswordLength"
            v-model="password"
            class="form-control"
          />
          <span>{{ errors.password }}</span>
        </div>
        <div v-if="!user" class="form-group">
          <label for="passwordAgain">再次輸入密碼</label>
          <Field
            type="password"
            autocomplete="on"
            name="passwordAgain"
            :rules="isPasswordAgain"
            v-model="passwordAgain"
            class="form-control"
          />
          <span>{{ errors.passwordAgain }}</span>
        </div>
        <div class="form-group">
          <label for="address">地址</label>
          <Field
            type="text"
            name="address"
            :rules="isRequires"
            v-model="address"
            class="form-control"
          />
          <span>{{ errors.address }}</span>
        </div>
        <div class="form-group">
          <label for="phone">手機</label>
          <Field type="tel" name="phone" :rules="isPhone" v-model="phone" class="form-control" />
          <span>{{ errors.phone }}</span>
        </div>
        <!-- 如果沒登入 改為註冊按鈕 發送ajax 有登入改成用 送出按鈕 -->
        <button v-if="!user" type="submit" class="btn btn-primary">送出</button>
      </Form>
    </div>
  </div>
  <slot v-if="user"></slot>
</template>
<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { Field, Form, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import axios from 'axios'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const phoneReg = /^09[0-9]{8}$/
export default defineComponent({
  props: ['user'],
  components: {
    Field,
    Form
  },
  setup (props) {
    const { proxy } = getCurrentInstance()
    const { handleSubmit } = useForm()
    const router = useRouter()
    const num = ref()
    const email = ref(props.user ? props.user.email : '')
    const name = ref(props.user ? props.user.name : '')
    const phone = ref(props.user ? '0' + props.user.phone : '')
    const password = ref()
    const address = ref(props.user ? props.user.address : '')
    const passwordAgain = ref()
    const onSubmit = handleSubmit(() => {
      const payload = {
        name: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        address: address.value
      }
      axios.post('/user', payload).then(() => {
        proxy.$message({
          message: '註冊成功',
          type: 'success',
          showClose: true,
          duration: 1000
        })
        setTimeout(() => {
          router.push('/')
        }, 1000)
      })
    })
    const isEmailRules = (value) => {
      if (!emailReg.test(value)) {
        return '請輸入正確的email'
      }
      return true
    }
    const isPhone = (value) => {
      if (!phoneReg.test(value)) {
        return '請輸入正確的手機號碼'
      }
      return true
    }
    const isPasswordLength = (value) => {
      if (!value || value.length < 6) {
        return '密碼至少要六個字!'
      }
      return true
    }
    const isPasswordAgain = (value) => {
      if (value !== password.value) {
        return '請重複同樣的密碼'
      }
      return true
    }
    const isRequires = (value) => {
      if (!value) {
        return '這是必填選項!'
      }
      return true
    }
    return {
      isEmailRules,
      isPasswordLength,
      isRequires,
      email,
      password,
      address,
      passwordAgain,
      isPasswordAgain,
      phone,
      isPhone,
      onSubmit,
      name,
      num
    }
  }
});
</script>
