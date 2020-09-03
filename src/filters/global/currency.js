import Vue from 'vue';

Vue.filter('currencyDisplay', {
    read(val) {
        return `${val.toFixed(2)}€`;
    },
    write(val) {
        const number = +val.replace(/[^\d.]/g, '');
        // eslint-disable-next-line no-restricted-globals
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
    },
});
