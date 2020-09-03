const messageModule = {
    namespaced: true,
    state: () => ({
        message: {
            text: '',
        },
        color: '',
    }),
    mutations: {
        ERROR_MESSAGE(state, payload) {
            state.color = 'error';
            state.message = { text: payload };
        },
        SUCCESS_MESSAGE(state, payload) {
            state.color = 'success';
            state.message = { text: payload };
        },
        INFO_MESSAGE(state, payload) {
            state.color = 'info';
            state.message = { text: payload };
        },
    },
    actions: {
        showErrorMessage({ commit }, message) {
            commit('ERROR_MESSAGE', message);
        },
        showSuccessMessage({ commit }, message) {
            commit('SUCCESS_MESSAGE', message);
        },
        showInfoMessage({ commit }, message) {
            commit('INFO_MESSAGE', message);
        },
    },
};

export default messageModule;
