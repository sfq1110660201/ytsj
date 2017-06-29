import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        emailName: '',
        enterpriseId:'',
        phoneNum:'',
        resettoken:''
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
        "setPhone": function(state, phoneNum) {
            state.phoneNum = phoneNum
            console.log('保存', state.phoneNum)
        },
        "setResettoken": function(state, resettoken) {
            state.resettoken = resettoken
            console.log('保存', state.resettoken)
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
        "getPhone": function(state) {
            console.log('保存', state.phoneNum)
            return state.phoneNum
        },
        "getResettoken": function(state) {
            console.log('保存', state.resettoken)
            return state.resettoken
        }
    },
    actions: {
        "setEmail": function(state, emailName) {
            console.log('获取', state.emailName)
            store.commit("setEmail", emailName)
        },
        "setEnterpriseId": function(state, enterpriseId) {
            console.log('获取', state.enterpriseId)
            store.commit("setEnterpriseId", enterpriseId)
        },
        "setPhone": function(state, phoneNum) {
            console.log('获取', state.phoneNum)
            store.commit("setPhone", phoneNum)
        },
        "setResettoken": function(state, resettoken) {
            console.log('获取', state.resettoken)
            store.commit("setPhone", resettoken)
        }
    }
})
export default store
