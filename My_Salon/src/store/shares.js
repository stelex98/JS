import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default{
  namespaced: true,
  state: { 
    dataShares: [ // данные акций
      {
        title: "Розыгрыш в нашем салоне",
        describe:
          "Listen to your favorite artists and albums whenever and wherever, online and offline. Listen to your favorite artists and albums whenever and wherever, online and offline."
      },
      {
        title: "Розыгрыш в нашем салоне",
        describe:
          "Listen to your favorite artists and albums whenever and wherever, online and offline. Listen to your favorite artists and albums whenever and wherever, online and offline."
      },
      {
        title: "Розыгрыш в нашем салоне",
        describe:
          "Listen to your favorite artists and albums whenever and wherever, online and offline. Listen to your favorite artists and albums whenever and wherever, online and offline."
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
}
