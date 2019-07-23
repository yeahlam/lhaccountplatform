import Vue from 'vue'
import Vuex from 'vuex'
import {isDev} from './urls'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
        userDict: []
    },
    mutations: {
        setUserInfo(state, userInfo) {
            if (isDev()) {
                state.userInfo = {
                    id: 1,
                    integration: 0,
                    name: "12",
                    phoneUrl: "ad.png",
                    roleId: 1,
                    // roleName: "网格员"
                    roleName: "楼长"
                }
            } else {
                state.userInfo = userInfo

            }
            // 1 2 3 4 分别对应 1 超级管理员，2 -管理员 3 -网格员 4 - 楼长 角色的4个id

        },
        setUserDict(state, userDict) {
            state.userDict = userDict
        }
    },
    actions: {},
    getters: {
        getUserInfo: state => {
            return state.userInfo
        },
        getUserDict: state => {
            return state.userDict
        }
    }
})
