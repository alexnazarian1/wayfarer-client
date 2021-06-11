import React from 'react';
import Routes from './config/routes';
import NavBar from './components/NavBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes />
      </main>
    </>
  );
}

export default App;
