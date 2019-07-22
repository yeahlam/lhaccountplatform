import http from './http'
import store from './store'
import urls from './urls'

export async function getUserInfo() {
    let res = await http.get(urls.user)
    store.commit('setUserInfo', res.data.data)
}

export async function getUserDict() {
    let res = await http.get(urls.roles)
    store.commit('setUserDict', res.data.data)
}
