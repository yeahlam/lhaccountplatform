import router from './router'
import store from './store'
import {getUserInfo, getUserDict, login} from './userInfo'

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

let nocheck = ['login', 'house']

router.beforeEach(async (to, from, next) => {
    next()
    if (to.name === 'userCenter') {
        var page = getQueryString('page') || ''
        if (page == 'message') {
            var tab = getQueryString('tab') || ''
            next({name: 'message', params: {tab: tab}})
            return
        } else if (page == 'house') {
            next({name: page})
            return
        }
    }


    //保证页面拥有userinfo在store
    if (nocheck.includes(to.name)) {
        next()
        return
    }

    if (store.getters.getUserInfo.id) {
        next()
    } else {
        await login()
        await getUserInfo()
        await getUserDict()
        next()
    }

    // ...
})
