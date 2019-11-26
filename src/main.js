import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index.js'

import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App),
  data:{
    eventHub: new Vue()
  }
}).$mount('#app')
