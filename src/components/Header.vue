<template>
  <header class="globalheader">
    <div class="header-left">
      <div class="logo">
        <router-link to="/">TOMSESHOP</router-link>
      </div>
    </div>
    <div class="header-right">
      <el-badge :value="buyCartAmount" type="danger">
        <router-link to="/BuyCart">
          <i class="el-icon-shopping-cart-1"></i>
        </router-link>
      </el-badge>
      <div class="rwd-toggle" ref="rwd" :class="{hide:isHide}">
        <a class="a-link">關於我們</a>
        <router-link class="a-link" :to="`/MyOrder/${user.uid}`" v-if="user.name">我的訂單</router-link>
        <router-link class="a-link" to="/signUp" v-if="!user.name">註冊</router-link>
        <a class="a-link" @click="handleDialog" v-if="!user.name">登入</a>
        <a class="a-link" @click="handleLogout" v-if="user.name">登出</a>
      </div>
      <img ref="toggle" class="toggle" @click="toggleMenu" src="../assets/menu.svg" alt />
    </div>
    <diaogModel :destroy-on-close="true" :append-to-body="true" title="Login" ref="dialog">
      <login-dailog :close="close">
        <button @click="close" type="submit" class="btn btn-primary">送出</button>
      </login-dailog>
    </diaogModel>
  </header>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
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
  setup (props) {
    const isHide = ref(true)
    const router = useRouter()
    const store = useStore()
    const dialog = ref(null)
    const rwd = ref(null)
    const toggle = ref(null)
    const buyCartAmount = computed(() => { return store.state.buyCartAmount })
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const BuyCartAmount = ref(0)
    cart.forEach((item) => {
      BuyCartAmount.value += item.amount
    })
    store.commit('handleBuyCartAmount', BuyCartAmount.value)
    const handleLogout = () => {
      store.commit('logout')
      router.push('/')
    }
    const handleDialog = () => {
      dialog.value.open()
    }
    const close = () => {
      dialog.value.close()
    }
    const toggleMenu = () => {
      isHide.value = !isHide.value
    }
    // clickout
    document.body.addEventListener('click', (e) => {
      if (rwd.value) {
        if (!rwd.value.contains(e.target) && isHide.value === false && !toggle.value.contains(e.target)) {
          isHide.value = true
        } else if (rwd.value.contains(e.target)) {
          isHide.value = true
        }
      }
    }
    )
    return {
      dialog,
      handleDialog,
      handleLogout,
      buyCartAmount,
      close,
      isHide,
      toggleMenu,
      rwd,
      toggle
    }
  }
});
</script>
<style scoped lang="scss">
.rwd-toggle.hide {
  @media (max-width: 768px) {
    height: 0;
    border: 0px solid transparent;
  }
}
.rwd-toggle {
  input {
    border-radius: 30px;
  }
  @media (max-width: 768px) {
    overflow: hidden;
    transition: height 0.3s;
    border: 1px solid rgb(75, 74, 74);
    border-radius: 3px;
    width: 300px;
    background: rgb(255, 255, 255);
    position: absolute;
    z-index: 999;
    bottom: -100px;
  }
  .a-link {
    cursor: pointer;
    padding: 0px 10px;
    @media (max-width: 768px) {
      margin: 10px 0px;
      display: block;
      color: black;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
<style lang="scss">
.el-icon-shopping-cart-1 {
  color: white;
  font-size: 20px;
  text-align: right;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
}
.el-overlay {
  position: absolute;
  top: 0%;
  width: 100%;
}
.errorColor {
  color: rgb(219, 103, 103);
}
</style>
