import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/stylus/index.styl'
// 模似数据
import mockData from 'mockjs'
Vue.prototype.$mock = mockData
// 生产环境跨域
if (process.env.NODE_ENV == 'development') {
  console.log('开发环境')
} else {
  Axios.defaults.baseURL = 'http://47.112.21.206:8001'//数据化服务器
  // Axios.defaults.baseURL = 'http://120.77.34.67:9918'
}
// 点击自动复制
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;
import Request from './common/mixins/Exception.js' // axios请求封装（异常处理）
import loading from './common/mixins/loading.js'// 全局加载中
import apiResponse from '@/common/mixins/apiResponse.js' // 高阶请求封装
Vue.mixin(Request).mixin(loading).mixin(apiResponse)
import {
  Message
} from 'element-ui'
import {
  Tabbar, TabbarItem,Button,NavBar
} from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Button).use(NavBar)
Vue.prototype.$message = Message
// Vue.prototype.$notifi = Notification
import 'element-ui/lib/theme-chalk/index.css'
import "lib-flexible/flexible.js"
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import echarts from 'echarts/dist/echarts.min.js'

Vue.component(CollapseTransition.name, CollapseTransition)


/** 加入Axios请求 qs处理GET参数 配置axios全局默认值*/
import qs from 'qs'
import Axios from 'axios'

Axios.defaults.timeout = 12000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = Axios
Vue.prototype.$qs = qs
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//全局混入