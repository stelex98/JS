export default {
    addNewCurrentStock(state, payload) {
        state.currentStock[0] = payload;
    },
    addNewCurrentStockAdmin(state, payload) {
        state.currentIndexStockForAdmin[0] = payload;
        state.currentStockForAdmin[0] = state.stock[payload];
    },
    addNewStock(state, payload) {
        state.stock.push(payload);
    },
    deleteCurrentStock(state, payload) {
        state.stock.splice(payload, 1);
    },
    editStockArray(state, payload) {
        state.stock[state.currentIndexStockForAdmin[0]] = payload[0];
    }
}