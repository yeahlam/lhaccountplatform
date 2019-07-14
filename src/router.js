import Vue from 'vue'
import Router from 'vue-router'
import search from  './components/search'
import home from  './components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
