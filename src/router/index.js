import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  Outstanding,
  SampleStock,
  BucketStock,
  Order,
  Production,
  Admin
} from '../views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/report/outstanding-orders',
    name: 'OutstandingOrders',
    component: Outstanding
  },
  {
    path: '/report/replenish-sample-stock',
    name: 'ReplenishSampleStock',
    component: SampleStock
  },
  {
    path: '/report/replenish-bucket-stock',
    name: 'ReplenishBucketStock',
    component: BucketStock
  },
  {
    path: '/report/materials-to-order',
    name: 'MaterialsToOrder',
    component: Order
  },
  {
    path: '/report/production-availability',
    name: 'ProductionAvailability',
    component: Production
  },
  {
    path: '/settings/material-administration',
    name: 'MaterialAdministration',
    component: Admin
  }
]

const router = new VueRouter({
  routes
})

export default router
