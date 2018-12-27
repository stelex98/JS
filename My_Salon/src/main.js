import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import YmapPlugin from 'vue-yandex-maps'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

Vue.use(YmapPlugin)
Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  yandexMap,
  ymapMarker,
  render: h => h(App)
}).$mount('#app')
