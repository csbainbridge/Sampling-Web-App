import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, TablePlugin } from 'bootstrap-vue'

// Register Bootstrap
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(TablePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
