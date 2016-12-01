/**
 * Created by davidngv on 11/30/16.
 */

/*
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))
*/



import React from 'react';
import {render} from 'react-dom';
import {Router, useRouterHistory, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';


import AppRoutes from './AppRoutes';


// Helpers for debugging
window.React = React;
// window.Perf = require('react-addons-perf');


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/reactjs/react-router/blob/master/docs/guides/README.md
 */
render(
  <Router history={hashHistory}>
    {AppRoutes}
  </Router>
, document.getElementById('root'));
