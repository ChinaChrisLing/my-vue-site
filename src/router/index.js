import Vue from 'vue'
import VueRouter from 'vue-router'

const MobileCheckRoom = () => import('../containers/MobileCheckRoom/MobileCheckRoom')
const MobileCheckQuality = () => import('../containers/MobileCheckQuality/MobileCheckQuality')
const CustomerService = () => import('../containers/CustomerService/CustomerService')
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  // linkActiveClass: 'on',
  routes: [
    {
      path: '/',
      component: MobileCheckRoom,
      name: 'MobileCheckRoom'
    },
    {
      path: '/MobileCheckQuality',
      component: MobileCheckQuality,
      name: 'MobileCheckQuality'
    },
    {
      path: '/CustomerService',
      component: CustomerService,
      name: 'CustomerService'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
