import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    user
  }
})
