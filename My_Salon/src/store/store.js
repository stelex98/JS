import Vue from 'vue'
import Vuex from 'vuex'

import shares from './shares/shares'
import header from './Header/header'
import homeServices from './HomeServices/homeServices'
import reviewsSlider from './reviewsSlider/reviewsSlider'
import price from './Price/price'
import stock from './stock/stock'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shares,
    header,
    homeServices,
    reviewsSlider,
    price,
    stock
  }
})
