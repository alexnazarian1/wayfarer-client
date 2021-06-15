import React from 'react';

import CityModel from './models/CityModel';
import UserModel from './models/UserModel';
import Routes from './config/routes';
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';


class App extends React.Component {
  state = {
    loginModalShow: false,
    auth: {
      user: null,
      isAdmin: false,
    },
    error: null,
    cities: [],
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

  storeLogin = (user, isAdmin, message) => {
    const auth = {
      user: user,
      isAdmin: isAdmin,
    };
    this.setState({
      auth: auth,
      error: message,
    });
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  clearLogin = () => {
    localStorage.clear();
    this.setState({
      auth: {
        user: null,
        isAdmin: false,
      },
      error: null,
    })
  }

  handleLogin = (user) => {
    UserModel.login(user)
      .then(response => {
        this.storeLogin(response.data.authedUser, Boolean(response.data.isAdmin), response.data.message);
      })
      .catch(err => {
        this.setState({
          auth: {
            user: null,
            isAdmin: false,
          },
          error: err.message,
        });
      });
  }

  fetchCityData = () => {
    CityModel.all()
        .then(response => {
            if (response.data.message) {
                this.setState({
                    error: response.data.message,
                });
            } else {
                this.setState({
                    cities: response.data.cities,
                });
            };
        })
        .catch(err => {
            this.setState({
                error: err.message,
            });
        });
}

  componentDidMount() {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth) {
      this.storeLogin(auth.user, auth.isAdmin);

    };
    this.fetchCityData();
  }

  render() {

    return (
      <>
        <NavBar 
          handleShow={this.handleShow} 
          handleClose={this.handleClose} 
          loginModalShow={this.state.loginModalShow} 
          handleLogin={this.handleLogin} 
          storeLogin={this.storeLogin}
          logout={this.clearLogin}
          auth={this.state.auth}
          />
        <main>
          {this.state.error ? <h1>{this.state.error}</h1> : ''}
          <Routes auth={this.state.auth.user} cities={this.state.cities}/>
        </main>
      </>
    );
  }
}

export default App;
