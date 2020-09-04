import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入iconfont
import './assets/icon/iconfont.css';

// 导入下载好的阿里巴巴矢量图标文件
import './assets/iconfont/iconfont.css'
// 导入全局组件bottom
import mtheader from './components/MTHeader.vue';
import fixbottom from './components/fixbottom.vue';
Vue.config.productionTip = false

// 引入及配置axios
import axios from "axios";
axios.defaults.baseURL="http://localhost:7001"
Vue.prototype.$http=axios;


Vue.use(ElementUI);
Vue.component('mtheader',mtheader);
Vue.component('fixbottom',fixbottom);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
