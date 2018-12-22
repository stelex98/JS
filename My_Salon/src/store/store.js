import Vue from 'vue'
import Vuex from 'vuex'

import shares from './shares'
import header from './header'
import homeServices from './homeServices'
import reviewsSlider from './reviewsSlider'
import price from './price'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shares,
    header,
    homeServices,
    reviewsSlider,
    price

  }
  // state: { // общее состояние приложения ( все текущие )
  //   
  // },
  // mutations: {
  //   // newShares(state, payload){ // добавляем новые акции
  //   //   state.dataShares.push(payload);
  //   // }
  // },
  // actions: {
  //   // newShares({commit}, payload) { // обычное событие вызвыающие мутацию, в данном случае добавление новых акций
  //   //   console.log(payload);
  //   //   commit('newShares', payload)
  //   // }
  // },
  // getters: {
  //   
  // }
})
