import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/CSS/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入树形插件
import TreeTable from 'vue-table-with-tree-grid'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 设置拦截器,给API设置token进行授权访问
axios.interceptors.request.use(config => {
  // 在请求头中添加token
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 最后一定要返回修改后的config
  return config
})
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.component('tree-table', TreeTable)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
