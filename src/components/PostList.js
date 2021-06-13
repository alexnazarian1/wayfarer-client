import PostItem from './PostItem';
import CreatePost from './CreatePost';

import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

function PostList(props) {
    if (props.city.posts.length === 0) {
        return <h3>No posts yet. Add one!</h3>
    };
    const sortedPosts = props.city.posts.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
    const postItems = sortedPosts.map(post => {
        return <PostItem key={post._id} post={post} />
    })
    return (
        <>
            <Row>
                <Col className="posts-header">
                    <h3>Posts</h3>
                    <CreatePost city={props.city} handleNewPost={props.handleNewPost} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup>
                        { postItems }
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
}

export default PostList;