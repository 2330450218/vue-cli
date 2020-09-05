import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"

// 导入iconfont
import './assets/icon/iconfont.css';
//导航栏
import myhead from "./components/myhead.vue"
Vue.component("myhead", myhead)

//分类栏
import classify from "./components/classify.vue"
Vue.component("classify", classify)
// 底部导航
import fixbottom from './components/fixbottom.vue';
Vue.component("fixbottom", fixbottom)
// 导入阿里巴巴矢量库
// 导入下载好的阿里巴巴矢量图标文件
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)



Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:7001';
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')