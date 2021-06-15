import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import CitiesIndex from '../pages/CitiesIndex';
import PostShow from '../pages/PostShow';
import EditPost from '../pages/EditPost';

function Routes(props) {
  const protectedRoutes = (
    <>
    <Route path='/cities' component={CitiesIndex} />
    <Route path='/posts/:id/edit' component={EditPost} />
    <Route exact path='/posts/:id' component={PostShow} />
    </>
  )
  console.log('from routes', props);
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      { props.auth ? protectedRoutes : <Redirect to='/' />}
    </Switch>
  );
}

export default Routes;
