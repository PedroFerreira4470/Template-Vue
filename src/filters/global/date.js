import Vue from 'vue';

Vue.filter('date', (val) => {
    // eslint-disable-next-line no-console
    if (val === null || val === ""){
        return "No Date"
    }
    const d = new Date(val);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
});

