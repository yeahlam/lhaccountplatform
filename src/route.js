import router from './router'
import store from './store'
import {getUserInfo, getUserDict} from './userInfo'

router.beforeEach(async (to, from, next) => {
    //保证页面拥有userinfo在store
    if (store.getters.getUserInfo.id) {
        next()
    } else {
        await getUserInfo()
        await getUserDict()
        next()
    }
    // ...
})