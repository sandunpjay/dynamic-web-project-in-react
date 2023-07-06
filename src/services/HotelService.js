
import axios from "axios";

const HOTEL_API_BASE_URL = "http://localhost:8080/hotel/";

class HotelService {

    getHotels(){
        return axios.get(HOTEL_API_BASE_URL+'list');
    }
    
}

export default new HotelService();