import React from 'react';

import UserModel from '../models/UserModel';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Signup extends React.Component {
    state = {
        user: '',
        password: '',
        confirmPassword: '',
        email: '',
        profilePic: '',
        error: null,
    }

    handleClose = () => {
        this.setState({
            user: '',
            password: '',
            confirmPassword: '',
            email: '',
            profilePic: '',
        });
        this.props.closeModal();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            const user = {
                username: this.state.user,
                password: this.state.password,
                email: this.state.email,
                profilePic: this.state.profilePic,
            };
            UserModel.create(user)
                .then(response => {
                    console.log(response.data);
                    if (response.data.message) {
                        this.setState({
                            error: response.data.message,
                        });
                    } else {
                        this.props.storeLogin(response.data.user.username, response.data.user.isAdmin);
                    };
                    this.handleClose();
                })
                .catch(err => {
                    this.setState({
                        error: err.message,
                    });
                });
        };
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h2><strong>Signup</strong></h2>
                <Form.Group controlId="user">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="user" 
                        value={this.state.user}
                        onChange={this.handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="confirmPassword" 
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                </Form.Group>

                <Form.Group controlId="profilePic">
                    <Form.Label>Profile Picture (URL)</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="profilePic" 
                        value={this.state.profilePic}
                        onChange={this.handleChange}
                        />
                </Form.Group>

                <Row>
                    <Col className="post-actions">
                        <Button className="post-submit" type="submit" variant="primary">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
  }
  
export default Signup;