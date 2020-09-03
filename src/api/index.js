import http from "./http-common";

export default {
    name: "api",
    // eslint-disable-next-line no-dupe-keys
    get(url, params) {
        return http.get(url, {
            params: params
        });
    },
    post(url, data, params) {
        return http.post(url, data,{
            params: params
        });
    },
    put(url, data,params) {
        return http.put(url, data,{
            params: params
        });
    },
    delete(url,params) {
        return http.delete(url,{
            params: params
        });
    }

};
