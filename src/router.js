import Vue from 'vue'
import Router from 'vue-router'
import search from './components/search'
import news from './components/news'
import home from './components/home'
import report from './components/report'
import video from './components/video'
import userCenter from './components/userCenter'

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
        }
    ]
})
