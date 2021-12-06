import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import settings from '../views/settings.vue'
import linkreg from '../views/linkreg.vue'
import layoutpag from '../views/layoutpag'
import subassgin from '../views/subassgin'
import feeSetup from '../views/feeSetup'
import feeSetUp1 from '../views/feeSetUp1.vue'
import postUtmeReg from '../views/postUtmeReg'
import postUtme2021 from '../views/postUtme2021'
import login from '../views/login'
import preloader from '../views/preloader'
import postAssignment from '../views/postAssignment'
import listCreateAdminList from '../views/listCreateAdminList'


Vue.use(VueRouter)

const routes = [
  {
    path: '/listCreateAdminList',
    name: 'listCreateAdminList',
    component: listCreateAdminList
  },
  {
path:'postAssignment',
name:'postAssignment',
component:postAssignment
  },
  {
    path:'/preloader',
    name:'preloader',
    component: preloader
  },
  {
    path:'/feeSetup',
    name:'feeSetup',
    component: feeSetup
  },
  {
    path:'/feeSetUp1',
    name:'feeSetUp1',
    component: feeSetUp1
  },
  {
    path: '/layoutpag',
    name: 'layoutpag',
    component: layoutpag
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/postUtmeReg',
    name: 'postUtmeReg',
    component: postUtmeReg
  },
  {
    path: '/subassgin',
    name: 'subassgin',
    component: subassgin
  },
  {
    path: '/postUtme2021',
    name: 'postUtme2021',
    component: postUtme2021
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  },

  {
    path: '/linkreg',
    name: 'linkreg',
    component: linkreg
  },
  {
    path: '/otp',
    name: 'otp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/otp.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
