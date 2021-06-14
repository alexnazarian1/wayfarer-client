import axios from 'axios';
const url = 'http://localhost:4000/api/v1/comments';

class CommentModel {
    static create = (comment) => {
        const request = axios.post(url, comment);
        return request;
    }
    static show(commentId) {
        return fetch(`${url}/${commentId}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
    }
    static update(comment) {
        const request = axios.put(`${url}/${comment._id}`, comment);
        return request;
    }

    static delete(commentId) {
        const request = axios.delete(`${url}/${commentId}`);
        return request;
    }
};

export default CommentModel;