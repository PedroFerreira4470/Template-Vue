import api from '../api';

class LookupDataService {
    getClientsLookup() {
        return api.get(`/bookingAir/ClientLookup`,{pageNumber: 1})
    }

    getAddressesLookup(clientId) {
        return api.get(`/bookingAir/AddressesLookup`,{clientId: clientId})
    }

}

export default new LookupDataService();
