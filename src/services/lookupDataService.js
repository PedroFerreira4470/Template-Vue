import api from '../api';

class LookupDataService {
    getClientsLookup() {
        return api.get(`/bookingAir/ClientLookup`,{pageNumber: 1})
    }

}

export default new LookupDataService();
