import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './route'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './rem'
import 'reset-css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
