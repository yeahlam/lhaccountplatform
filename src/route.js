import router from './router'
import store from './store'
import {getUserInfo, getUserDict} from './userInfo'
let nocheck = ['login']

router.beforeEach(async (to, from, next) => {
    //保证页面拥有userinfo在store
    if (nocheck.includes(to.name)) {
        next()
        return
    }

    if (store.getters.getUserInfo.id) {
        next()
    } else {
        await getUserInfo()
        await getUserDict()
        next()
    }

    // ...
})
