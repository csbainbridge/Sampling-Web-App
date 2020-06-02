// Generic Vue Depenedencies
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Style Dependencies
import {
  BootstrapVue,
  IconsPlugin,
  TablePlugin,
  BootstrapVueIcons
} from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFillDrip,
  faBookOpen,
  faBoxOpen,
  faIndustry
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Register Font Awesome Components
library.add({
  faFillDrip,
  faBookOpen,
  faBoxOpen,
  faIndustry
})
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Register Bootstrap Components
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(TablePlugin)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
