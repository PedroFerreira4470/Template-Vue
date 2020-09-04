import api from '../api';

class BookDataService {
    getAllBookingsAir(pageSize, pageNumber) {
        return api.get(`/bookingAir/GetAllBookingsAir?`, {pageSize: pageSize,pageNumber: pageNumber})
    }

}

export default new BookDataService();
