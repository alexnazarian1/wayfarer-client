import axios from 'axios';
const url = 'http://localhost:4000/api/v1/users';

class UserModel {
    static login = (user) => {
        const request = axios.post(`${url}/login`, user);
        return request;
    }

    static create = (user) => {
        const request = axios.post(url, user);
        return request;
    }
};

export default UserModel;