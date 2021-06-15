import React from 'react';
import PostModel from '../models/PostModel';
import { Link, Redirect } from 'react-router-dom';
import DeletePostAlert from '../components/DeletePostAlert';
import CommentList from '../components/CommentList'

import '../css/PostShow.css';

class PostShow extends React.Component {

  state = {
    post: null,
    redirect: false,
    alertStyle: {
      display: 'none',
    },
    error: null,
  }

  componentDidMount() {
    PostModel.show(this.props.match.params.id)
      .then((data) => {
        this.setState({
          post: data.post,
        });
      })
  }

  handleDeleteClick = () => {
    this.setState({
      alertStyle: {
        display: 'block',
      }
    });
  }

  handleDeleteConfirm = () => {
    PostModel.delete(this.state.post._id)
      .then(response => {
        if (response.data.message) {
          this.setState({
            error: response.data.message,
          });
        } else {
          this.setState({
            redirect: true,
          });
        }
      })
      .catch(err=> {
        this.setState({
          error: err.message,
        });
      });
  }
  

  render() {
    if (this.state.error) {
      return <h2>{this.state.error}</h2>
    }
    if (this.state.redirect) {
      return <Redirect to="/cities" />
    };
    if (!this.state.post) {
      return <h2>No post found</h2>
    };
    return (
      <main>
        <h2 className="post-title">{this.state.post.title}</h2>
        <p className="city-name">-{this.state.post.city}-</p>
        <p className="author">Author: {this.state.post.user}</p>
        <p className="body">{this.state.post.body}</p>
        <Link to={`/posts/${this.state.post._id}/edit`}>
          <button className="post-btn custom-btn btn-16 edit">Edit Post</button>
        </Link>
        <button className="post-btn custom-btn btn-16" onClick={this.handleDeleteClick}>Delete Post</button>
        <DeletePostAlert 
          style={this.state.alertStyle}
          title={this.state.post.title} 
          handleDeleteConfirm={this.handleDeleteConfirm}
        />
        <div className="spacer"></div>
          <CommentList comments={this.state.post.comments} post={this.state.post} />
      </main>
    );
  }
}

export default PostShow;