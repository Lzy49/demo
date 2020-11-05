import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false
Object.assign(Vue.prototype, {store:store})
new Vue({
  render: h => h(App),
}).$mount('#app')
