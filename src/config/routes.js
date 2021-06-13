import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CitiesIndex from '../pages/CitiesIndex';
// import CreatePost from '../pages/CreatePost';
import Login from '../pages/Login';
import PostShow from '../pages/PostShow'
import EditPost from '../pages/EditPost'

function Routes(props) {
  return (
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      {/* <Route path='/login' component={Login} /> */}
      <Route path='/cities' component={CitiesIndex} />
      {/* <Route path='/createpost' component={CreatePost} /> */}
      <Route path='/post/:id' component={PostShow} />
      <Route path='/post/:id/edit' component={EditPost} />
    </Switch>
  );
}

export default Routes;
