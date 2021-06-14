import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends React.Component {
    state = {
        user: '',
        password: '',
    }

    handleClose = () => {
        this.setState({
            user: '',
            password: '',
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
        this.props.handleLogin(this.state);
        this.handleClose();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h2><strong>Login</strong></h2>
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
  
export default Login;