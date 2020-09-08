import Vue from 'vue';

Vue.filter('valueIsEmpty', (value) => {
    if (value === null || value === "") return 'No Data Available';
    return value;
});
