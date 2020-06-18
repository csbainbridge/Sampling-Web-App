// Generic Vue Depenedencies
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap Dependencies
import {
  BootstrapVue,
  IconsPlugin,
  TablePlugin,
  BootstrapVueIcons
} from 'bootstrap-vue'

// Font Awesome Dependencies
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFillDrip,
  faBookOpen,
  faBoxOpen,
  faIndustry,
  faVial,
  faPencilAlt,
  faUserCircle,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { faUserCircle as farUserCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Register Font Awesome Components
library.add({
  faFillDrip,
  faBookOpen,
  faBoxOpen,
  faIndustry,
  faVial,
  faPencilAlt,
  faUserCircle,
  farUserCircle,
  faSearch
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
