import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import topnav from "@/components/nav.vue"
import leftnav from "@/components/leftNav.vue"
import fixbottom from "@/components/fixbottom.vue"

// 导入iconfont
import './assets/icon/iconfont.css'

Vue.config.productionTip = false
// 注册全局组件
Vue.component("topnav",topnav)
Vue.component("leftnav",leftnav)
Vue.component("fixbottom",fixbottom)
Vue.use(ElementUI)

//配置默认请求地址
axios.defaults.baseURL = 'https://192.168.6.32';
Vue.prototype.$http = axios




new Vue({
  router,
  store,
 
  render: h => h(App)
}).$mount('#app')
