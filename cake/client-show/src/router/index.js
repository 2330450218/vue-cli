import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },

  // 导航蛋糕
  {
    path: '/cake',
    name: 'Cake',
    component: () => import(  '@/components/classify.vue')
  },
  // 导航面包
  {
    path: '/bread',
    name: 'Bread',
    component: () => import(  '@/components/classify.vue')
  },
  // 导航冰淇淋
  {
    path: '/iceCream',
    name: 'iceCream',
    component: () => import(  '@/components/classify.vue')
  },
  // 导航咖啡下午茶
  {
    path: '/Coffee',
    name: 'Coffee',
    component: () => import( '@/components/classify.vue')
  },
  // 登录注册测试
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/navigation/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/navigation/Register.vue')
  },
  // 个人中兴
  {
    path: '/about',
    name: 'About',
    component: () => import(  '../views/navigation/About.vue')
  },
  // 购物车
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import(  '../views/navigation/shoppingCart.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router