import axios from 'axios';
const url = 'http://localhost:4000/api/v1/posts';

class PostModel {
    static create = (post) => {
        const request = axios.post(url, post);
        return request;
    }
    static show(postId) {
        return fetch(`${url}/${postId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log('data: ', data);

            return data;
        })
    }
    static update(post) {
        const request = axios.put(`${url}/${post._id}`, post);
        return request;
    }
}


export default PostModel;