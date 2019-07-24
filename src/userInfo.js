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

export async function login() {
    let res = await http.get(urls.login)
    if (res.data.data == -1) {
        window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7274b4cf11e4229a&redirect_uri=http%3A%2F%2F20q12h9711.iok.la%2Fwx%2Fbasic-info%2Fuser&response_type=code&scope=snsapi_base&state=#wechat_redirect'
    }
}
