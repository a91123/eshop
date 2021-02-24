import { createStore } from 'vuex'
import axios from 'axios'
const getData = async (url) => {
  const { data } = await axios.get(url)
  return data
}
const postData = async (url, payload) => {
  const { data } = await axios.post(url, payload)
  return data
}
const store = createStore({
  state: {
    ProductList: [],
    DetailList: [],
    wishList: JSON.parse(localStorage.getItem('wishList')) || [],
    dialogTableVisible: false,
    ProductCart: localStorage.getItem('cart') || [],
    categoryProduct: [],
    user: { isLogin: false },
    error: { status: false },
    token: localStorage.getItem('token') || '',
    buyCartAmount: 0
  },
  mutations: {
    setError (state, e) {
      state.error = e
    },
    getSearch (state, data) {
      state.ProductList = data
    },
    getProductList (state, data) {
      state.ProductList = data
    },
    getUserLogin (state, data) {
      const token = data.token
      state.token = data.token
      localStorage.setItem('token', token)
      axios.defaults.headers.common.authorization = token
    },
    wishList (state, id) {
      console.log(state.wishList)
      if (state.wishList.includes(id)) {
        state.wishList.splice(state.wishList.indexOf(id), 1);
        localStorage.setItem('wishList', JSON.stringify(state.wishList));
      } else {
        state.wishList.push(id);
        localStorage.setItem('wishList', JSON.stringify(state.wishList));
      }
    },
    DelCart (state, cart) {
      state.ProductCart = cart
    },
    getDetailList (state, data) {
      state.DetailList = data[0]
    },
    handleBuyCartAmount (state, amount) {
      state.buyCartAmount += amount
      if (amount === 0) {
        state.buyCartAmount = ''
      }
    },
    getProductCart (state) {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      let newMycartDisplay = []
      for (let i = 0; i < cart.length; i++) {
        const index = newMycartDisplay.findIndex(
          (value) => value.id === cart[i].id && value.size === cart[i].size
        )
        if (index !== -1) {
          newMycartDisplay[index].amount += cart[i].amount
        } else {
          const newItem = { ...cart[i] }
          newMycartDisplay = [...newMycartDisplay, newItem]
        }
      }
      state.ProductCart = newMycartDisplay
      localStorage.setItem('cart', JSON.stringify(state.ProductCart))
      // state.buyCartAmount = state.ProductCart.length
      let sum = 0
      state.ProductCart.forEach((item) => {
        sum += item.amount
        state.buyCartAmount = sum
      })
    },
    fetchCurrentUser (state, data) {
      state.user = { isLogin: true, ...data }
    },
    logout (state) {
      state.user = { isLogin: false }
      state.token = ''
      localStorage.removeItem('token')
      delete axios.defaults.headers.common.authorization
    }
  },
  getters: {
    getTotal: (state) => {
      let sum = 0
      state.ProductCart.forEach((item) => { sum += (item.price * item.amount) })
      return sum
    }
  },
  actions: {
    getProductList ({ commit }, payload) {
      const { page } = payload
      const { category } = payload
      getData(`/product/${category}/?page=${page}`).then(res => {
        commit('getProductList', res)
      })
    },
    getDetailList ({ commit }, cid) {
      getData(`/detail/${cid}`).then(res => {
        commit('getDetailList', res)
      })
    },
    fetchCurrentUser ({ commit }) {
      getData('/current').then(res => {
        commit('fetchCurrentUser', res)
      })
    },
    getUserLogin ({ commit, dispatch }, payload) {
      return postData('/login', payload).then(res => {
        commit('getUserLogin', res) // setToken
        return dispatch('fetchCurrentUser')
      })
    }
  }
})
export default store
