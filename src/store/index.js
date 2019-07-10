import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import candy from './candy.js'
Vue.use(Vuex)

const state = {
    error:{}
}
const mutations = {
    error(state, error){
        state.error = error;
    }
}
const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    user,
    candy
  }
})
