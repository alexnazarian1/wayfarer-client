import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CitiesIndex from '../pages/CitiesIndex';
// import CreatePost from '../pages/CreatePost';
import Login from '../pages/Login'

function Routes(props) {
  return (
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      {/* <Route path='/login' component={Login} /> */}
      <Route path='/cities' component={CitiesIndex} />
      {/* <Route path='/createpost' component={CreatePost} /> */}
    </Switch>
  );
}

export default Routes;
