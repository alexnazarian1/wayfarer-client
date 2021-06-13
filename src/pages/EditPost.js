import React from 'react';
import NavBar from '../components/NavBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PostModel from '../models/PostModel'

class EditPost extends React.Component {

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


  handleChange = (event) => {
    if (event.target.type === 'checkbox') {
      this.setState({ completed: !this.state.completed });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  }

  render() {
    console.log('props', this.props);

    return (
      <main>
        <h2>Create a New Post</h2>

        {/* <Form onSubmit={this.handleSubmit}>
          
          <div className="form-input">
            <label htmlFor="city">City:</label>
            <input 
              type="text" 
              name="city"
              value={this.state.post.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="user">Author</label>
            <input 
              type="text" 
              name="user" 
              onChange={this.handleChange}
              value={this.state.post.user} />
          </div>

          <div className="form-input">
            <label htmlFor="body">Body</label>
            <input 
              type="text" 
              name="body" 
              onChange={this.handleChange}
              value={this.state.post.body} />
          </div> */}
{/* 
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              name="title" 
              onChange={this.handleChange}
              value={this.state.post.title} />
          </div>

          <div className="form-input">
            <label htmlFor="completed">Completed</label>
            <input 
              type="checkbox"
              id="completed"
              checked={this.state.completed} 
              onChange={this.handleChange} />
          </div>

          <button type="submit">Create</button>
        </Form> */}
      </main>
    );
  }
}

export default EditPost;
