import React from 'react';
import NavBar from '../components/NavBar';
import Button from 'react-bootstrap/Button';
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
    error: null,
  }

  componentDidMount() {
    PostModel.show(this.props.match.params.id)
      .then((data) => {
        this.setState({
          _id: data.post._id,
          city: data.post.city,
          title: data.post.title,
          user: data.post.user,
          body: data.post.body,
        });
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
    if (this.state.city.length === 0) {
      return <h2>No post to edit</h2>
    };
    return (
      <main>
        <h2>Create a New Post</h2>

        <Form onSubmit={this.handleSubmit}>
          
          <div className="form-input">
            <label htmlFor="city">City: {this.state.city}</label>
          </div>
          <div className="form-input">
            <label htmlFor="user">Author: {this.state.user}</label>
          </div>
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="title" 
              onChange={this.handleChange}
              value={this.state.title} />
          </div>


          <div className="form-input">
            <label htmlFor="body">Body</label>
            <textarea 
              type="text" 
              name="body" 
              onChange={this.handleChange}
              value={this.state.body}>
            </textarea>
          </div>

          <button type="submit">Submit Edit</button>
        </Form>
      </main>
    );
  }
}

export default EditPost;
