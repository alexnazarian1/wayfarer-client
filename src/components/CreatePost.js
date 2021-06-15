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
        title: '',
        body: '',
    }

    handleClose = () => {
        this.setState({
            show: false,
            title: '',
            body: '',
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleShow = (e) => {
        this.setState({
            show: true,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('auth')).user;
        this.handleClose();
        this.props.handlePostSubmit({
            user: user,
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

                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="title" 
                                placeholder="What's this all about?"
                                value={this.state.title}
                                onChange={this.handleChange}
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
                                onChange={this.handleChange}
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