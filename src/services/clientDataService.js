import api from "../api";

class ClientDataService {
    getClient(clientId, clientCurrency,bookingNumber) {
        return api.get(`/bookingAir/GetById`, {
            clientId: clientId,
            clientCurrencyId: clientCurrency,
            bookingNumber: bookingNumber,
        });
    }
}

export default new ClientDataService();
