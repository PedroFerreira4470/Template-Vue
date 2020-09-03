const authModule = {
    namespaced: true,
    state: () => ({
        userId: "",
    }),

    mutations: {
        SET_USER_ID(state, payload) {
            state.userId = payload;
        },
    },
};

export default authModule;
