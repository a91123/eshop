<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      ref="toggleButton"
      id="toggleButton"
      type="button"
      @click.prevent="toggleRwdOpen"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      :class="{displayBlock:rwdOpen}"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            @click="toggleOpen"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Dropdown</a>
          <div
            class="dropdown-menu"
            id="dropdown-menu"
            :style="{display:'block'}"
            v-if="isOpen"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div class="nav-right">
        <i class="el-icon-user-solid"></i>
        <el-badge :value="buyCartAmount" class="item">
          <router-link to="/BuyCart">
            <i class="el-icon-shopping-cart-1"></i>
          </router-link>
        </el-badge>

        <span class="welcome" v-if="user.name">
          你好,{{user.name}}
          <span class="login-out" @click="handleLogout">登出</span>
        </span>
        <span v-else class="login-out" @click="handleDialog">登入</span>
      </div>
    </div>
  </nav>
  <diaogModel ref="dialog" :destroy-on-close="true" :append-to-body="true" title="Login">
    <Form v-slot="{ errors }" @submit="onSubmit">
      <label for="email">email</label>
      <div class="form-group">
        <Field
          name="email"
          v-model="email"
          type="email"
          class="form-control"
          :rules="isEmailRules"
        />
        <span class="errorColor">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label for="password">密碼</label>
        <Field
          name="password"
          v-model="password"
          class="form-control"
          type="password"
          :rules="isPasswordLength"
        />
        <span class="errorColor">{{ errors.password }}</span>
      </div>
      <button type="submit" class="btn btn-primary">送出</button>
    </Form>
  </diaogModel>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useForm, Field, Form } from 'vee-validate'
import { useStore } from 'vuex'
import diaogModel from '../components/dialog.vue'
import { useRouter } from 'vue-router'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  props: {
    user: Object
  },
  components: {
    diaogModel,
    Field,
    Form
  },
  setup (props) {
    const router = useRouter()
    const store = useStore()
    const email = ref()
    const password = ref()
    const { handleSubmit } = useForm()
    const toggleButton = ref(null)
    const isOpen = ref(false)
    const dialog = ref(null)
    const rwdOpen = ref(false)
    // const cart = ref(JSON.parse(localStorage.getItem('cart')))
    const buyCartAmount = computed(() => { return store.state.buyCartAmount })
    // watch(buyCartAmount, () => {
    //   buyCartAmount.value = cart.value.length
    //   console.log(cart.value.length)
    // })
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
    const handleLogout = () => {
      store.commit('logout')
    }
    const handleDialog = () => {
      dialog.value.displayDialog()
    }
    const onSubmit = handleSubmit(() => {
      store.dispatch('getUserLogin', { email: email.value, password: password.value }).then(res => {
        dialog.value.displayNoneDialog()
        router.push('/')
      })
    })
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const toggleRwdOpen = () => {
      console.log(rwdOpen.value)
      rwdOpen.value = !rwdOpen.value
    }
    return {
      isOpen,
      toggleOpen,
      rwdOpen,
      toggleButton,
      toggleRwdOpen,
      dialog,
      handleDialog,
      isEmailRules,
      isPasswordLength,
      onSubmit,
      email,
      password,
      handleLogout,
      buyCartAmount
    }
  }
});
</script>
<style scoped lang="scss">
.displayBlock {
  display: block;
}
.nav-right {
  span {
    padding-left: 15px;
  }
  a:visited {
    color: black;
  }
  i {
    padding-left: 15px;
  }
  .login-out {
    cursor: pointer;
  }
}
</style>
<style>
.el-overlay {
  position: absolute;
  top: 0%;
  width: 100%;
}
.errorColor {
  color: rgb(219, 103, 103);
}
</style>
