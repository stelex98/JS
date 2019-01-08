import Vue from 'vue'
import Vuex from 'vuex'

import shares from './shares'
import header from './header'
import homeServices from './homeServices'
import reviewsSlider from './reviewsSlider'
import price from './price'
import stock from './stock'

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
