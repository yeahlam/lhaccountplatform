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


Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/video',
            name: 'video',
            component: video
        },
        {
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/report',
            name: 'report',
            component: report
        },
        {
            path: '/userCenter',
            name: 'userCenter',
            component: userCenter
        },
        {
            path: '/collection',
            name: 'collection',
            component: collection
        },
        {
            path: '/applyList',
            name: 'applyList',
            component: applyList
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo
        },
        {
            path: '/message',
            name: 'message',
            component: message
        },
        {
            path: '/problemclass',
            name: 'problemclass',
            component: problemclass
        },
        {
            path: '/infodetail',
            name: 'infodetail',
            component: infodetail
        },
        {
            path: '/complete',
            name: 'complete',
            component: complete
        }
    ]
})
