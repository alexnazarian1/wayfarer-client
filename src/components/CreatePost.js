import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CreatePost extends React.Component {
    state = {
        show: false,
        user: '',
        title: '',
        body: '',
        redirect: false,
    }

    handleClose = () => {
        this.setState({
            show: false,
        });
    }

    handleShow = (e) => {
        this.setState({
            show: true,
        });
    }

    handleUserChange = (e) => {
        this.setState({
            user: e.target.value,
        });
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    handleBodyChange = (e) => {
        this.setState({
            body: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleClose();
        this.props.handleNewPost({
            user: this.state.user,
            title: this.state.title,
            body: this.state.body,
            cityId: this.props.city._id,
        }, this.props.city);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/cities" />
        }
        return (
          <>
            <Button variant="primary" onClick={this.handleShow}>
              Add Post
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Post for {this.props.city.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
              
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="user">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="user" 
                                placeholder="What do we call you?"
                                value={this.state.user}
                                onChange={this.handleUserChange}
                                />
                        </Form.Group>

                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="title" 
                                placeholder="What's this all about?"
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                                />
                        </Form.Group>

                        <Form.Group controlId="body">
                            <Form.Label>What do you want to share?</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name="body" 
                                placeholder="Share it here!" 
                                value={this.state.body}
                                onChange={this.handleBodyChange}
                                />
                        </Form.Group>

                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>

              </Modal.Body>
            </Modal>
          </>
        );
    }
  }
  
export default CreatePost;