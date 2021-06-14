import React from 'react';

import UserModel from './models/UserModel';
import Routes from './config/routes';
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    loginModalShow: false,
    authedUser: null,
    isAdmin: false,
    error: null,
  }

  handleClose = () => {
    this.setState({
        loginModalShow: false,
    });
  }

  handleShow = () => {
      this.setState({
          loginModalShow: true,
      });
  }

  handleLogin = (user) => {
    UserModel.login(user)
      .then(response => {
        if (response.data.message) {
          this.setState({
            error: response.data.message,
            isAdmin: false,
            authedUser: null,
          });
        } else {
          this.setState({
            authedUser: response.data.authedUser,
            isAdmin: Boolean(response.data.isAdmin),
            error: null,
          })
        };
      })
      .catch(err => {
        this.setState({
          error: err.message,
          isAdmin: false,
          authedUser: null,
        });
      });
  }

  render() {
    return (
      <>
        <NavBar 
          handleShow={this.handleShow} 
          handleClose={this.handleClose} 
          loginModalShow={this.state.loginModalShow} 
          handleLogin={this.handleLogin} />
        <main>
        {this.state.error ? <h1>{this.state.error}</h1> : ''}
          <Routes />
        </main>
      </>
    );
  }
}

export default App;
