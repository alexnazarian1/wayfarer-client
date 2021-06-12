import React from 'react';
import PostModel from '../models/PostModel';

class PostShow extends React.Component {

  state = {
    post: null 
  }

  componentDidMount() {
    PostModel.show(this.props.match.params.id)
      .then((data) => {
        console.log('data:', data)

        this.setState({
          post: data.post
        });
      })
  }

  render() {
    if (!this.state.post) {
      return (
        <h2>No post found</h2>
      )
    }
      return (
      <main>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.city}</p>
        <p>Author: {this.state.post.user}</p>
        <p>{this.state.post.body}</p>
      </main>
    );
  }
}

export default PostShow;