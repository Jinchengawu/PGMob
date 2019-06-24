import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userInfo:{}

  },
  mutations: {
    SET_USER_INFO(state, data) {
      state.userInfo = data
    },
    
  },
  actions: {

  },
  getters: {
    userInfo: state => state.userInfo,    
  },
})
