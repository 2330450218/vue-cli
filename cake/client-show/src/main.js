import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入iconfont
import './assets/icon/iconfont.css';
// 导入全局组件bottom
import fixbottom from './components/fixbottom.vue';
Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.component('fixbottom',fixbottom);
axios.defaults.baseURL = 'https://192.168.6.32';
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
