import Vue from 'vue'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from '../../App.vue'
import store from '../../store'
import Home from '../../views/home/Index.vue'
import List from '../../views/list/Index'
import Mine from '../../views/mine/mine'

import '../../assets/font_1608775_j0gc5qdcrr/iconfont.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
      {
        path: '/(home|index)?',
        name: 'Home',
        component: Home,
      },
      {
        path: '/list',
        name: 'List',
        component: List,
      },
      {
          path: '/mine',
          name: 'Mine',
          component: Mine,
      }
  ]
})

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.config.productionTip = false

  sync(store, router)

  return new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
