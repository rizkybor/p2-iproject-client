import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SetIsLogin: function (state, payload = false) {
      state.isLogin = payload
    }
  },
  actions: {
    login: function ({ commit }, { email, password }) {
      axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: {
          email,
          password
        }
      }).then(({ data }) => {
        Swal.fire(
          'Login Success!',
          'welcome to mountainesia'
        )
        localStorage.setItem('token', data.token)
        commit('SetIsLogin', true)
        router.push('/')
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data ? err.response.data.message : 'Something Wrong'
        })
      })
    }
  },
  modules: {}
})
