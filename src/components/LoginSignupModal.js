import React from 'react';

import Login from './Login';

import Modal from 'react-bootstrap/Modal';

function LoginSignupModal(props) {
    return (
        <>
          <Modal show={props.show} onHide={props.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Welcome!</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Login closeModal={props.handleClose} handleLogin={props.handleLogin}/>
                  <h2>Signup</h2>
            </Modal.Body>
          </Modal>
        </>
      );
}
  
export default LoginSignupModal;