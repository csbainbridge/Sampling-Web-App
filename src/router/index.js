import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/report/:report',
    name: 'Report',
    component: Report
  }
]

const router = new VueRouter({
  routes
})

export default router
