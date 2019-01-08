import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        headers: [
            {
                text: "Наименование услуги",
                align: "left",
                sortable: false,
                value: "name"
            },
            { text: "Цена", align: "left", value: "price" }
        ],
        desserts: [
            {
                value: false,
                name: "Массаж для лица",
                price: 3
            },
            {
                value: false,
                name: "Спа для рук",
                price: 14
            },
            {
                value: false,
                name: "Спа для тела",
                price: 23
            },
            {
                value: false,
                name: "Стрижка",
                price: 15
            },
            {
                value: false,
                name: "Завивка",
                price: 10
            },
            {
                value: false,
                name: "Наращивание ногтей",
                price: 5
            },
            {
                value: false,
                name: "Чистка лица",
                price: 10
            },
            {
                value: false,
                name: "Окраска волос",
                price: 20
            },
            {
                value: false,
                name: "Педикюр",
                price: 10
            },
            {
                value: false,
                name: "Маникюр",
                price: 10
            }
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        returnDataPriceHeaders(state) {
            return state.headers
        },
        returnDataPriceDesserts(state) {
            return state.desserts
        }
    }
}
