import React from 'react';
import Form from 'react-bootstrap/Form';
import PostModel from '../models/PostModel';
import { Redirect } from 'react-router-dom';

class EditPost extends React.Component {

  state = {
    _id: '',
    city: '',
    title: '',
    user: '',
    body: '',
    redirect: false,
    redirectAuth: false,
    error: null,
  }

  componentDidMount() {
    const auth = JSON.parse(localStorage.getItem('auth'));
    PostModel.show(this.props.match.params.id)
      .then((data) => {
        if (data.post.user === auth.user || auth.isAdmin) {
          this.setState({
            _id: data.post._id,
            city: data.post.city,
            title: data.post.title,
            user: data.post.user,
            body: data.post.body,
          });
        } else {
          this.setState({
            redirectAuth: true,
          });
        }
      })
  }

  handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    handleSubmit = (e) => {
      e.preventDefault();
      PostModel.update({
        _id: this.state._id,
        city: this.state.city,
        title: this.state.title,
        user: this.state.user,
        body: this.state.body,
      })
        .then(response => {
          if (response.data.message) {
            this.setState({
              error: response.data.message,
            });
          } else {
            this.setState({
              redirect: true
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
      return <h2>{this.state.error}</h2>
    };
    if (this.state.redirect) {
      return <Redirect to={`/posts/${this.state._id}/`}/>
    };
    if (this.state.redirectAuth) {
      return <Redirect to={'/cities'} />
    };
    if (this.state.city.length === 0) {
      return <h2>No post to edit</h2>
    };
    return (
      <main>
        <h2 id='edit-post-header'>Edit this Post</h2>

        <Form className='edit-post' onSubmit={this.handleSubmit}>
          
          <Form.Group controlId='title'>
              <Form.Label htmlFor="city">City: {this.state.city}</Form.Label>
          </Form.Group>

          <Form.Group controlId='author'>
            <Form.Label htmlFor="user">Author: {this.state.user}</Form.Label>
          </Form.Group>

          <Form.Group controlId="title">
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control 
              type="text" 
              name="title" 
              onChange={this.handleChange}
              value={this.state.title} />
          </Form.Group>


          <Form.Group controlId='body'>
            <Form.Label htmlFor="body">Body</Form.Label>
            <Form.Control 
              as="textarea" 
              name="body" 
              onChange={this.handleChange}
              value={this.state.body}/>
          </Form.Group>

          <button className="post-btn custom-btn btn-16 submit" type="submit">Submit Edit</button>
        </Form>
      </main>
    );
  }
}

export default EditPost;
