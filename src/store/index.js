import { createStore } from 'vuex'
import axios from 'axios'
const getData = async url => {
  const { data } = await axios.get(url)
  return data
}
export default createStore({
  state: {
    ProductList: [],
    DetailList: [],
    ProductCart: []
  },
  mutations: {
    getProductList (state, data) {
      state.ProductList = data.rows
      console.log(state.ProductList, '123')
    },
    getDetailList (state, data) {
      state.DetailList = data[0]
    },
    getProductCart (state) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      if (cart) {
        cart.filter((item) => {
          const index = state.ProductCart.findIndex((value) => value.id === item.id)
          if (index === -1) {
            state.ProductCart.push(item)
          } else {
            state.ProductCart[index].amount += item.amount
          }
        })
        localStorage.setItem('cart', JSON.stringify(state.ProductCart))
      }
    },
    handleAmount (state, payload) {
      const { amount, index } = payload
      state.ProductCart[index].amount = amount
      localStorage.setItem('cart', JSON.stringify(state.ProductCart))
      if (state.ProductCart[index].amount < 1) {
        state.ProductCart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(state.ProductCart))
      }
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
    }
  }
})
