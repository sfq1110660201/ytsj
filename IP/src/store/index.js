import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        emailName: '',
        enterpriseId:'',
    },
    mutations: {
        "setEmail": function(state, emailName) {
            state.emailName = emailName
            console.log('保存', state.emailName)
        },
        "setEnterpriseId": function(state, enterpriseId) {
            state.enterpriseId = enterpriseId
            console.log('保存', state.enterpriseId)
        },
    },
    getters: {
        "getEmail": function(state) {
            console.log('获取', state.emailName)
            return state.emailName
        },
        "getEnterpriseId": function(state) {
            console.log('保存', state.enterpriseId)
            return state.enterpriseId
        },
    },
    actions: {
        "setEmail": function(state, emailName) {
            console.log('获取', state.emailName)
            store.commit("setEmail", emailName)
        },
        "setEnterpriseId": function(state, enterpriseId) {
            console.log('获取', state.enterpriseId)
            store.commit("setEmail", enterpriseId)
        },
    }
})
export default store
