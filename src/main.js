import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

require('./assets/polldle.css')

Vue.config.productionTip = false

new Vue({
  // Enable routing
  router,
  render: h => h(App)
}).$mount('#app')

createApp(App).use(store).mount('#app')
