import React from 'react';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import PostModel from '../models/PostModel';

import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

class PostList extends React.Component {
    state = {
        posts: null,
    }

    componentDidMount() {
        this.setState({
            posts: this.props.city.posts,
        });
    }

    handlePostSubmit = (post) => {
        PostModel.create(post)
            .then(response => {
                let posts = this.state.posts;
                posts.push(response.data.post);
                this.setState({
                    posts: posts,
                });
            });
    }

    render() {
        if (this.state.posts == null) {
            return (<h3>No posts yet. Add one!</h3>)
        };
        const sortedPosts = this.state.posts.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
        const postItems = sortedPosts.map(post => {
            return <PostItem key={post._id} post={post} />
        })
        return (
            <>
                <Row>
                    <Col className="posts-header">
                        <h3>Posts</h3>
                        <CreatePost city={this.props.city} handleNewPost={this.handlePostSubmit} />
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
}

export default PostList;