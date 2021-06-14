import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


function PostItem(props) {
    const ms = Date.now() - Date.parse(props.post.createdAt);
    let days = Math.floor(ms/(1000*60*60*24));
    if (days === 0) {
        days = 'Today'
    } else {
        days = `${days} days ago`;
    };
    return (
        <ListGroup.Item className="post">
            <h5><Link to={`/posts/${props.post._id}`} >{props.post.title}</Link> by {props.post.user}</h5>
            <p>{props.post.body}</p>
            <p>Posted: {days}</p>
        </ListGroup.Item>
    );
};

export default PostItem;