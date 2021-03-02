import Vue from 'vue'
import Antd from 'ant-design-vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import App from './App.vue'
import store from './store'
import './mock'

import 'ant-design-vue/dist/antd.css'
import './styles/scss/index.scss'
import './styles/global.less'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import router from './router'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
Vue.component('vue-draggable-resizable', VueDraggableResizable)
