import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vPatitionJs from './component/PatitionJS/index'

Vue.config.productionTip = false
Vue.use(vPatitionJs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
