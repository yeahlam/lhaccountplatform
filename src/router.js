import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component:() => import('./components/home.vue'),
            redirect:'userCenter'
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('./components/news.vue')
        },
        {
            path: '/video',
            name: 'video',
            component: () => import('./components/video.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('./components/search.vue')
        },
        {
            path: '/report',
            name: 'report',
            component: () => import('./components/report.vue')
        },
        {
            path: '/userCenter',
            name: 'userCenter',
            component: () => import('./components/userCenter.vue')
        },
        {
            path: '/collection',
            name: 'collection',
            component: () => import('./components/collection.vue')
        },
        {
            path: '/applyList',
            name: 'applyList',
            component: () => import('./components/applyList.vue')
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: () => import('./components/userinfo.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import('./components/message.vue')
        },
        {
            path: '/problemclass',
            name: 'problemclass',
            component: () => import('./components/problemclass.vue')
        },
        {
            path: '/infodetail',
            name: 'infodetail',
            component: () => import('./components/infodetail.vue')
        },
        {
            path: '/complete',
            name: 'complete',
            component: () => import('./components/complete.vue')
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: () => import('./components/login.vue')
        // },
        {
            path: '/txmap',
            name: 'txmap',
            component: () => import('./components/txmap.vue')
        },
        {
            path: '/txmap2',
            name: 'txmap2',
            component: () => import('./components/txmap2.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('./components/shop.vue')
        }
    ]
})
