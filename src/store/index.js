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
export default createStore({
  state: {
    ProductList: [],
    DetailList: [],
    dialogTableVisible: false,
    ProductCart: localStorage.getItem('cart') || [],
    categoryProduct: [],
    user: { isLogin: false },
    error: { status: false },
    token: localStorage.getItem('token') || '',
    buyCartAmount: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : ''
  },
  mutations: {
    setError (state, e) {
      state.error = e
    },
    handleDialogTableVisible (state, status) {
      state.dialogTableVisible = status
    },
    getProductList (state, data) {
      state.ProductList = data.rows
      state.categoryProduct = data.rows
    },
    getProductCategory (state, category) {
      if (category !== 0) {
        const categoryProduct = state.ProductList.filter((item) => {
          return item.category === category
        })
        state.categoryProduct = categoryProduct
      } else {
        state.categoryProduct = state.ProductList
      }

      console.log(state.categoryProduct)
    },
    getUserLogin (state, data) {
      const token = data.token
      state.token = data.token
      localStorage.setItem('token', token)
      axios.defaults.headers.common.authorization = token
    },
    getDetailList (state, data) {
      state.DetailList = data[0]
    },
    handleBuyCartAmount (state) {
      state.buyCartAmount = ''
    },
    getProductCart (state) {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      let newMycartDisplay = []
      for (let i = 0; i < cart.length; i++) {
        const index = newMycartDisplay.findIndex(
          (value) => value.id === cart[i].id
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
      state.buyCartAmount = state.ProductCart.length
    },
    handleAmount (state, payload) {
      const { amount, index } = payload
      state.ProductCart[index].amount = amount
      localStorage.setItem('cart', JSON.stringify(state.ProductCart))
      if (state.ProductCart[index].amount < 1) {
        state.ProductCart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(state.ProductCart))
        state.buyCartAmount = state.ProductCart.length
      }
    },
    fetchCurrentUser (state, data) {
      state.user = { isLogin: true, ...data }
    },
    logout (state) {
      state.user = { isLogin: false }
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
    getProductList ({ commit }) {
      getData('/product').then(res => {
        commit('getProductList', res)
      })
    },
    getDetailList ({ commit }, cid) {
      getData(`/product/${cid}`).then(res => {
        commit('getDetailList', res)
        console.log(res)
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
        console.log(res)
        return dispatch('fetchCurrentUser')
      })
    }
  }
})
