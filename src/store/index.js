import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)

const state = {
    username:'', // login username
    cartCount:0 // number of products in the cart
}
export default new Vue.Store({
    state,
    mutations,
    actions
});