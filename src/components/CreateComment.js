import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusCircle } from 'react-bootstrap-icons';

class CreateComment extends React.Component {
    state = {
        show: false,
        body: '',
        post: '',
    }

    handleClose = () => {
        this.setState({
            show: false,
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
        const user = JSON.parse(localStorage.getItem('auth')).user;
        e.preventDefault();
        this.handleClose();
        this.props.handleCommentSubmit({
            user: user,
            body: this.state.body,
            post: this.props.post._id,
        });
    }

    render() {
        return (
          <>
            <PlusCircle className="posts-plus" onClick={this.handleShow} />
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Comment for <strong>{this.props.post.title}</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>

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
  
export default CreateComment;