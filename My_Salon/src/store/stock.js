import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        stock: [
            {
                title: "Акция 20%",
                typeService: "СПА",
                service: "СПА для лица",
                img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                describe: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                date: "30-12-2018",
                price: "30",
                show: false
            },
            {
                title: "Акция 40%",
                typeService: "Макияж",
                service: "Макияж",
                img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                describe: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                date: "25-01-2019",
                price: "20",
                show: false
            },
            {
                title: "Акция 25%",
                typeService: "Косметические услуги",
                service: "Пилинг",
                img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                describe: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                date: "30-12-2018",
                price: "30",
                show: false
            },
            {
                title: "Акция 10%",
                typeService: "НЕЙЛ-ДИЗАЙН",
                service: "Наращивание ногтей",
                img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                describe: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
                date: "05-02-2019",
                price: "45",
                show: false
            }
        ],
        masters: [
            'Артур', 'Ольга', 'Ростислав', 'Егор Дружинин'
        ],
        currentStock: [], // текущий, выбранный пользователем акция 
        currentStockForAdmin: [],
        currentIndexStockForAdmin: []
    },
    mutations: {
        addNewCurrentStock(state, payload) {
            state.currentStock[0] = payload;
        },
        addNewCurrentStockAdmin(state, payload) {
            state.currentIndexStockForAdmin[0] = payload;
            state.currentStockForAdmin[0] = state.stock[payload];

        },
        addNewStock(state, payload){
            state.stock.push(payload);
        },
        deleteCurrentStock(state, payload) {
            state.stock.splice(payload, 1);
        },
        editStockArray(state, payload) {
            state.stock[state.currentIndexStockForAdmin[0]] = payload[0];
            console.log(state.currentIndexStockForAdmin[0]);
            console.log(state.stock);
        }
    },
    actions: {
        addNewCurrentStock({ commit }, payload) {
            commit('addNewCurrentStock', payload)
        },
        addNewCurrentStockAdmin({ commit }, payload) {
            commit('addNewCurrentStockAdmin', payload)
        },
        addNewStock({ commit }, payload){
            commit('addNewStock', payload)
        },
        deleteCurrentStock({ commit }, payload) {
            commit('deleteCurrentStock', payload)
        },
        editStockArray({ commit }, payload) {
            commit('editStockArray', payload);
        },
    },
    getters: {
        returnDataOfMasters(state) {
            return state.masters;
        },
    }
}
