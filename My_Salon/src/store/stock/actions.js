export default {
    addNewCurrentStock({ commit }, payload) {
        commit('addNewCurrentStock', payload)
    },
    addNewCurrentStockAdmin({ commit }, payload) {
        commit('addNewCurrentStockAdmin', payload)
    },
    addNewStock({ commit }, payload) {
        commit('addNewStock', payload)
    },
    deleteCurrentStock({ commit }, payload) {
        commit('deleteCurrentStock', payload)
    },
    editStockArray({ commit }, payload) {
        commit('editStockArray', payload);
    },
}