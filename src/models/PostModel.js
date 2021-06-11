import axios from 'axios';
const url = 'http://localhost:4000/api/v1/posts';

class PostModel {
    static create = (post) => {
        const request = axios.post(url, post);
        return request;
    }
}

export default PostModel;