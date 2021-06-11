import axios from 'axios';
const url = 'http://localhost:4000/api/v1/cities';

class CityModel {
    static all() {
        const request = axios.get(url);
        return request;
    }
};

export default CityModel;