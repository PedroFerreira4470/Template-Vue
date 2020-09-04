import Vue from 'vue';

Vue.filter('currencyEur', (val)=> {
    return `${val.toFixed(2)}€`;
});
