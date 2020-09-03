import messageModule from './modules/messageModule';
import authModule from './modules/authModule';

const vuexStore = {
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        messageModule,
        authModule,
    },
};


export default vuexStore;
