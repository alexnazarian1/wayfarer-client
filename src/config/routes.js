import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import CitiesIndex from '../pages/CitiesIndex';
import PostShow from '../pages/PostShow';
import EditPost from '../pages/EditPost';

function Routes(props) {
  const cities = props.cities;
  const auth = props.auth || JSON.parse(localStorage.getItem('auth'));
  const protectedRoutes = (
    <Switch>
      <Route path='/cities' render={(props)=> <CitiesIndex {...props} cities={cities} /> }/>
      <Route path='/posts/:id/edit' component={EditPost} />
      <Route exact path='/posts/:id' component={PostShow} />
    </Switch>
  )
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      { auth ? protectedRoutes : <Redirect to='/' />}
    </Switch>
  );
}

export default Routes;
