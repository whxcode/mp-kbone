import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */'@/views/home/Index.vue')
const List = () => import(/* webpackChunkName: "List" */'@/views/list/Index.vue')
const Detail = () => import(/* webpackChunkName: "Detail" */'@/views/detail/Index.vue')
const Mine = () => import('@/views/mine/mine.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
       path: '/(home|index)?',
      name: 'Home',
      component: Home,
    },
    {
    path: '/index.html',
    name: 'HomeHtml',
    component: Home,
     },
      {
    path: '/test/(home|index)',
    name: 'HomeTest',
    component: Home,
  }, {
    path: '/list',
    name: 'List',
    component: List,
  },
      {
        path:'/mine',
        name:'Mine',
        component:Mine,
      },
      {
    path: '/test/detail/:id',
    name: 'Detail',
    component: Detail,
  }],
})
