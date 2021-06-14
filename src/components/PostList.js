import React from 'react';
import PostItem from './PostItem';
import CreatePost from './CreatePost';
import PostModel from '../models/PostModel';

import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';

class PostList extends React.Component {
    state = {
        posts: null,
        error: null,
    }

    componentDidMount() {
        this.setState({
            posts: this.props.city.posts,
        });
    }

    handlePostSubmit = (post) => {
        PostModel.create(post)
            .then(response => {
                if (response.data.message) {
                    this.setState({
                        error: response.data.message,
                    })
                } else {
                    let posts = this.state.posts;
                    posts.push(response.data.post);
                    this.setState({
                        posts: posts,
                    });
                };
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                });
            });
    }

    render() {
        if (this.state.error) {
            return <h3>{this.state.error}</h3>
        }
        if (!this.state.posts) {
            return <h3>Loading posts...</h3>
        };
        const sortedPosts = this.state.posts.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
        const postItems = sortedPosts.map(post => {
            return <PostItem key={post._id} post={post} />
        });
        if (postItems.length === 0) {
            return (
                <>
                <Row>
                    <Col className="posts-header">
                        <h3>Posts</h3>
                        <CreatePost city={this.props.city} handlePostSubmit={this.handlePostSubmit} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h5>No posts yet. Add one!</h5>
                    </Col>
                </Row>
            </>
            )
        };
        return (
            <>
                <Row>
                    <Col className="posts-header">
                        <h3>Posts</h3>
                        <CreatePost city={this.props.city} handlePostSubmit={this.handlePostSubmit} />
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