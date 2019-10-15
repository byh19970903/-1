import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './views/axios'
import ElementUI from 'element-ui'; 
Vue.use(ElementUI);
 Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  ElementUI,
  render: h => h(App)
}).$mount('#app')

