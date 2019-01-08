import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const namespaced = true;

export default {
    namespaced, 
    state: {
        dataMenuItems: [ // данные меню в header
            {
                title: "Услуги",
                route: "/services"
            },
            {
                title: "Цены",
                route: "/prices"
            },
            {
                title: "Отзывы",
                route: "/reviews"
            },
            {
                title: "Контакты",
                route: "/contacts"
            },
            {
                title: "Акции",
                route: "/stock"
            }
        ],
        dataListAdressPhone: [ // адрес и телефон в header
            "Лынькова 87/2",
            "+375-25-7410684",
            "Партизанский проспект 45/2",
            "+375-25-1799811"
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
}
