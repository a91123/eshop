<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">TOMSESHOP</a>
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
        <el-badge :value="buyCartAmount" class="badge">
          <router-link to="/BuyCart">
            <i class="el-icon-shopping-cart-1"></i>
          </router-link>
        </el-badge>
        <span class="welcome" v-if="user.name">
          你好,{{user.name}}
          <span class="login-out" @click="handleLogout">登出</span>
        </span>
        <span v-else class="login-out" @click="handleDialog">登入</span>
        <span>
          <router-link to="/signUp">註冊</router-link>
        </span>
      </div>
    </div>
  </nav>
  <diaogModel :destroy-on-close="true" :append-to-body="true" title="Login" ref="dialog">
    <login-dailog :close="close">
      <button @click="close" type="submit" class="btn btn-primary">送出</button>
    </login-dailog>
  </diaogModel>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import diaogModel from '../components/dialog.vue'
import loginDailog from '../components/loginFrom.vue'
export default defineComponent({
  props: {
    user: Object
  },
  components: {
    diaogModel,
    loginDailog
  },
  setup () {
    const store = useStore()
    const toggleButton = ref(null)
    const isOpen = ref(false)
    const dialog = ref(null)
    const rwdOpen = ref(false)
    const buyCartAmount = computed(() => { return store.state.buyCartAmount })
    const handleLogout = () => {
      store.commit('logout')
    }
    const handleDialog = () => {
      dialog.value.open()
    }
    const close = () => {
      dialog.value.close()
    }
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
      handleLogout,
      buyCartAmount,
      close
    }
  }
});
</script>
<style scoped lang="scss">
.displayBlock {
  display: block;
}
.nav-right {
  margin-right: 20px;
  span {
    padding-left: 15px;
  }
  a:visited {
    color: black;
  }
  i {
    padding-left: 15px;
    font-size: 18px;
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
