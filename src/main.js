import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios;//把axios挂载到vue上
Vue.prototype._Observer = new Vue()
new Vue({
  render:h => h(App), 
}).$mount("#app")