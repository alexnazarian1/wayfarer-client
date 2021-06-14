import React from 'react';

import Login from './Login';
import Signup from './Signup';

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
                  <Signup closeModal={props.handleClose} storeLogin={props.storeLogin}/>
            </Modal.Body>
          </Modal>
        </>
      );
}
  
export default LoginSignupModal;