import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './plugins/vueStore';
import router from './plugins/vueRoute';
import apiInterceptorsSetup from './api/interceptors';
import './filters/global/currency';
import './filters/global/capitalize';
import './filters/global/date';

Vue.config.productionTip = false;

apiInterceptorsSetup(store);

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app');
