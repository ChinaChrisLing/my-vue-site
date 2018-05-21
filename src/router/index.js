import Vue from 'vue'
import VueRouter from 'vue-router'

const MobileCheckRoom = () => import('../containers/MobileCheckRoom/MobileCheckRoom')
const MobileCheckQuality = () => import('../containers/MobileCheckQuality/MobileCheckQuality')
const CustomerService = () => import('../containers/CustomerService/CustomerService')
const SingleScreen = () => import('../components/SingleScreen/SingleScreen')
const MultiScreen = () => import('../components/MultiScreen/MultiScreen')
const Error404 = () => import('../components/Error/Error404')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  // linkActiveClass: 'on',
  routes: [
    {
      path: '/',
      component: MobileCheckRoom,
      children: [
        {
          path: '',
          component: SingleScreen,
          name: 'MobileCheckRoom',
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'sg',
          component: SingleScreen,
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'mg',
          component: MultiScreen,
          meta: {
            keepAlive: true
          }
        }
      ]
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
      path: '/404',
      component: Error404,
      name: '404'
    },
    {
      path: '*',
      redirect: '/sg'
    }
  ]
})
