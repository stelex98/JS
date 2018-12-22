import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: { // общее состояние приложения ( все текущие )
        dataHomeServices: [
            {
                title: "Парикмахерские",
                servicesArr: [
                    "окраска",
                    "мелирование",
                    "колорирование",
                    "стрижка",
                    "и многое другое"
                ],
                src: "https://visavis.by/sites/default/files/services/172x.jpg"
            },
            {
                title: "SPA и массаж",
                servicesArr: [
                    "для тела",
                    "для лица",
                    "для рук и ног",
                    "уход за волосами",
                    "и многое другое"
                ],
                src: "https://visavis.by/sites/default/files/services/182x.jpg"
            },
            {
                title: "Уход за ногтями",
                servicesArr: ["наращивание ногтей", "маникюр", "педикюр"],
                src: "https://visavis.by/sites/default/files/services/192x.jpg"
            },
            {
                title: "Косметология и макияж",
                servicesArr: [
                    "чистка лица",
                    "пилинг",
                    "депиляция",
                    "уход",
                    "и многое другое"
                ],
                src: "https://visavis.by/sites/default/files/services/202x.jpg"
            }
        ],

        servicesContent: [
            {
                globalName: "Парикмахерские услуги",
                itemsServices: [

                    "Окраска волос",
                    "Мелирование волос",
                    "Колорирование волос",
                    "Стрижка волос",
                    "Плетение косы"
                ]
            },
            {
                globalName: "СПА",
                itemsServices: [
                    "СПА для лица",
                    "СПА для тела",
                    "СПА для рук и ног",
                    "Спа для похудения",
                    "СПА для мужчик"
                ]
            },
            {
                globalName: "Косметические услуги",
                itemsServices: [
                    "Чистка лица",
                    "Пилинг",
                    "Депиляция",
                    "Уход",
                    "Коррекция бровей"
                ]
            },
            {
                globalName: "НЕЙЛ-ДИЗАЙН",
                itemsServices: ["Наращивание ногтей", "Маникюр", "Педикюр"]
            },
            {
                globalName: "Макияж",
                itemsServices: ["Макияж"]
            }
        ],

        describeForItemServices: [
            {
                Title: 'Макияж',
                describe: 'Все супер, классная вещь, ты должен танчить под нее!',
                price: '3'
            },
            {
                Title: 'Наращивание ногтей',
                describe: 'Все супер, классная вещь, ты должен танчить под нее!',
                price: '5'
            },
            {
                Title: 'Чистка лица',
                describe: 'Все супер, классная вещь, ты должен танчить под нее!',
                price: '10'
            },
            {
                Title: 'Окраска волос',
                describe: 'Причиной, по которой красят волосы, могут быть различные факторы. В большинстве случаев окраска волос проводится для создания определенного стиля, но нередко возникает потребность скрыть определенные косметические недостатки. Тогда и возникает вопрос: где покрасить волосы в Минске? Ответ однозначен: - качественно покрасить волосы в Минске можно в салоне красоты. Цены на эту процедуру невысокие, а в стоимость уже входят качественные материалы, при этом гарантируется здоровье волос и насыщенность тонов.',
                price: '20'
            }
        ]
    },
    
    mutations: {
    },
    actions: {
    },
    getters: {
        returnDataHomeServices(state) { // возвращаем наши акции
            return state.dataHomeServices
        },
        returnServicesContent(state) { // возвращаем наши акции
            return state.servicesContent
        },
        returnDescribe(state) { // возвращаем наши акции
            return state.describeForItemServices
        }
    }
}
