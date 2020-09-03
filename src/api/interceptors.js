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
        error => {
            // eslint-disable-next-line no-console
            console.log(error);
            store.dispatch(
                "messageModule/showErrorMessage",
                "Ops! Houve um problema ao processar a sua resposta."
            );
        }
    );
}
