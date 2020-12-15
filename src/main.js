import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios;//把axios挂载到vue上

new Vue({
  router,
  render:h => h(App),
}).$mount("#app")