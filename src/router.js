import Vue from 'vue'
import Router from 'vue-router'
import search from './components/search'
import news from './components/news'
import home from './components/home'
import report from './components/report'
import video from './components/video'
import userCenter from './components/userCenter'
import collection from './components/collection'
import applyList from './components/applyList'
import userinfo from './components/userinfo'
import message from './components/message'
import problemclass from './components/problemclass'
import infodetail from './components/infodetail'
import complete from './components/complete'
import login from './components/login'
import txmap from './components/txmap'
import txmap2 from './components/txmap2'



Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component:() => import(/* webpackChunkName: "group-foo" */ './components/home.vue'),
            redirect:'userCenter'
        },
        {
            path: '/news',
            name: 'news',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/news.vue')
        },
        {
            path: '/video',
            name: 'video',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/video.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/search.vue')
        },
        {
            path: '/report',
            name: 'report',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/report.vue')
        },
        {
            path: '/userCenter',
            name: 'userCenter',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/userCenter.vue')
        },
        {
            path: '/collection',
            name: 'collection',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/collection.vue')
        },
        {
            path: '/applyList',
            name: 'applyList',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/applyList.vue')
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/userinfo.vue')
        },
        {
            path: '/message',
            name: 'message',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/message.vue')
        },
        {
            path: '/problemclass',
            name: 'problemclass',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/problemclass.vue')
        },
        {
            path: '/infodetail',
            name: 'infodetail',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/infodetail.vue')
        },
        {
            path: '/complete',
            name: 'complete',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/complete.vue')
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: () => import(/* webpackChunkName: "group-foo" */ './components/login.vue')
        // },
        {
            path: '/txmap',
            name: 'txmap',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/txmap.vue')
        },
        {
            path: '/txmap2',
            name: 'txmap2',
            component: () => import(/* webpackChunkName: "group-foo" */ './components/txmap2.vue')
        }
    ]
})
