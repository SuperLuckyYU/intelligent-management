import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import store from './store'
import './mock'

import 'ant-design-vue/dist/antd.css'
import './styles/scss/index.scss'
import './styles/global.less'
import router from './router'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
