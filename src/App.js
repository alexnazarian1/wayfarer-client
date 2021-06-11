import React from 'react';
import Routes from './config/routes';
import NavBar from './components/NavBar'
import CityShow from './components/CityShow'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <h1>TESTING</h1>
        <CityShow />
      </main>
    </>
  );
}

export default App;
