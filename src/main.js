import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import '@/assets/font_1608775_j0gc5qdcrr/iconfont.css'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
