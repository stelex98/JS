import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        dataReviewsSlider: [
            {
                reviewsText: "Хочу выразить огромную благодарность коллективу салона Визави!!! Мало того, что там работают настоящие профессионалы своего дела (просто волшебницы, особенно косметолог Леночка), там я получаю заряд положительной энергии (девочки окружают такой заботой и дружелюбием) и по-настоящему расслабляюсь. Это счастье, что такие салоны существуют!",
                namePearson: "Артур Адамович",
                src: "https://visavis.by/sites/all/themes/visavis2/images/forms.jpg"
            },
            {
                reviewsText: "Все было шикарно, лучший салон, в котором я была",
                namePearson: "Ольга Гретченко",
                src: "https://visavis.by/sites/all/themes/visavis2/images/forms.jpg"
            },
            {
                reviewsText: "Салон очень понравился, внимательное отношение к клиентам!",
                namePearson: "Егор Дружинин",
                src: "https://visavis.by/sites/all/themes/visavis2/images/forms.jpg"
            }
        ]
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        returnDataReviewsSlider(state) {
            return state.dataReviewsSlider
        }
    }
}
