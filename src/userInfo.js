import http from './http'
import store from './store'

export async function getUserInfo() {
    let res = await http.get('/wx2/basic-info/user')
    if (res.data.code === 200) {
        store.commit('setUserInfo',res.data.data)
        console.log(res.data);
    }
}

getUserInfo()