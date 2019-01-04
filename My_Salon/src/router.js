import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import AppServices from '@/views/AppServices.vue'
import AppContacts from '@/views/AppContacts.vue'
import AppPrices from '@/views/AppPrices.vue'
import AppReviews from '@/views/AppReviews.vue'
import AppStock from '@/views/AppStock.vue'
import AppAdminPage from '@/views/AppAdminPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: AppServices
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts
    },
    {
      path: '/prices',
      name: 'prices',
      component: AppPrices
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: AppReviews
    },
    {
      path: '/stock',
      name: 'stock',
      component: AppStock
    },
    {
      path: '/admin',
      name: 'admin',
      component: AppAdminPage
    },
  ],
  mode: 'history'
})
