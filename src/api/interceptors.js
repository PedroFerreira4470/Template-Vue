import http from "./http-common";

export default function setup(store) {
    //Request
    http.interceptors.request.use(
        config => config,
        () => {
            store.dispatch(
                "messageModule/showErrorMessage",
                "Ops! Houve um problema ao enviar a requisição."
            );
        }
    );

    //Response
    http.interceptors.response.use(
        response => response,
        () => {
            //const { response } = error;
            //const { request, ...errorObject } = response; // take everything but 'request'

            store.dispatch(
                "messageModule/showErrorMessage",
                "Ops! Houve um problema ao processar a sua resposta."
            );
        }
    );
}
