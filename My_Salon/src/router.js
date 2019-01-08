import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/mainPages/Home.vue'
import AppServices from '@/views/mainPages/AppServices.vue'
import AppContacts from '@/views/mainPages/AppContacts.vue'
import AppPrices from '@/views/mainPages/AppPrices.vue'
import AppReviews from '@/views/mainPages/AppReviews.vue'
import AppStock from '@/views/mainPages/AppStock.vue'
import AppAdminPage from '@/views/mainPages/AppAdminPage.vue'


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
