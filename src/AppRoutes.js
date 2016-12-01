/**
 * Created by davidngv on 12/1/16.
 */

import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './layouts/Master';
import Welcome from './pages/Welcome';
import Login from './pages/Login';



/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
  <Route path='/' component={Master}>
    <IndexRoute component={Welcome} />
    <Route path='login' component={Login} />
  </Route>
);

export default AppRoutes;