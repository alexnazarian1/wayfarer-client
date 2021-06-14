import React from 'react';
import CommentItem from './CommentItem'
import CommentModel from '../models/CommentModel';
import CreateComment from './CreateComment'

class CommentList extends React.Component {

  state = {
    comments: null,
    error: null,
  }

  componentDidMount() {
    this.setState({
        comments: this.props.comments
    });
}

  handleCommentSubmit = (comment) => {
        CommentModel.create(comment)
            .then(response => {
                if (response.data.message) {
                    this.setState({
                        error: response.data.message,
                    })
                } else {
                    let comments = this.state.comments;
                    comments.push(response.data.comment);
                    this.setState({
                        comments: comments,
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
    if (!this.state.comments) {
      return <h3>Loading comments...</h3>
    };
    const commentItems = this.props.comments.map(comment => {
      return <CommentItem comment={comment} />
    });
    const sortedComments = this.state.comments.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
    
    return (
      <>
        <CreateComment />
        {commentItems}
      </>
    )
  }
};

export default CommentList;



// const sortedPosts = this.state.posts.sort((a,b) => Date.parse(b.createdAt)-Date.parse(a.createdAt));
//         const postItems = sortedPosts.map(post => {
//             return <PostItem key={post._id} post={post}