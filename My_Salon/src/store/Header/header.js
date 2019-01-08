import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex)
const namespaced = true;

export default {
    namespaced, 
    actions,
    getters,
    mutations,
    state
}
