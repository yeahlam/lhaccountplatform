import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
        userDict:[]
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
        setUserDict(state, userDict) {
            state.userDict = userDict
        }
    },
    actions: {

    },
    getters:{
        getUserInfo: state => {
            return state.userInfo
        },
        getUserDict: state => {
            return state.userDict
        }
    }
})
