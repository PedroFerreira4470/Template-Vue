const axiosDefault = require("axios").default;

const http = axiosDefault.create({
    baseURL: process.env.VUE_APP_API_URL,
    //timeout: 5000,
    headers: {
        "content-type": "application/json; charset=utf-8",
        "Authorization": process.env.VUE_APP_API_KEY
    },

});

export default http;
