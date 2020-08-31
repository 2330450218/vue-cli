import Vue from 'vue'
import VueRouter from 'vue-router'


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'index',
      component: ()=>import("../views/index/overviewindex.vue")
    },
  {
    path: '/goodsShop',
    name: 'goodsShop',
    component: ()=>import("../views//goods/overviewGoods.vue")
  },
  {
    path: '/goodsLable',
    name: 'goodsLable',
    component: ()=>import("../views/goods/overviewLable.vue")
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
