import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusCircle } from 'react-bootstrap-icons';

class CreatePost extends React.Component {
    state = {
        show: false,
        user: '',
        title: '',
        body: '',
    }

    handleClose = () => {
        this.setState({
            show: false,
            user: '',
            title: '',
            body: '',
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
        });
    }

    render() {
        return (
          <>
            <PlusCircle className="posts-plus" onClick={this.handleShow} />
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

                        <Row>
                            <Col className="post-actions">
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button className="post-submit" type="submit" variant="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>

              </Modal.Body>
            </Modal>
          </>
        );
    }
  }
  
export default CreatePost;