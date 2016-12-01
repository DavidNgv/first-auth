/**
 * Created by davidngv on 11/30/16.
 */

import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Master = (props) => <div>
    {props.children}
</div>

const Container = (props) => <div>
    <Nav />
    {props.children}
</div>


const Nav = () => (
    <div>
        <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/admin/address'>Address</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/admin/about'>About</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/admin/namedComponent'>Named Components</IndexLink>&nbsp;
        <IndexLink
            activeClassName='active'
            to={{
                pathname: 'admin/address/query',
                query: { message: 'Hello from Route Query' }
            }}>Route Query</IndexLink>&nbsp;
    </div>
)

const Welcome = (props) => <div>
    <h1>Welcome to ... !</h1>
    <br />
    <Link to='/login'>Login</Link>&nbsp;
</div>

const Login = () => <h1>Please Login!</h1>

const Home = () => <h1>Hello from Home!</h1>

const Address = (props) => <div>
    <br />
    <Link to='admin/address'>Twitter Feed</Link>&nbsp;
    <Link to='admin/address/instagram'>Instagram Feed</Link>
    <h1>We are located at 555 Jackson St.</h1>
    {props.children}
</div>

const NotFound = () => (
    <h1>404.. This page is not found!</h1>)

const Instagram = () => <h3>Instagram Feed</h3>
const TwitterFeed = () => <h3>Twitter Feed</h3>

const NamedComponents = (props) => (
    <div>
        {props.title}<br />
        {props.subTitle}
    </div>
)

const Title = () => (
    <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
    <h1>Hello from SubTitle Component</h1>
)

const About = (props) => (
    <div>
        <h3>Welcome to the About Page</h3>
        { props.params.name && <h2>Hello, {props.params.name}</h2>}
    </div>
)

const Query = (props) => (
    <h2>{props.location.query.message}</h2>
)


class App extends Component {
    render () {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Master}>
                    <IndexRoute component={Welcome} />
                    <Route path='login' component={Login} />

                    <Route path='admin' component={Container}>
                        <IndexRoute component={Home} />
                        <Route path='address' component={Address} >
                            <IndexRoute component={TwitterFeed} />
                            <Route path='instagram' component={Instagram} />
                            <Route path='query' component={Query} />
                        </Route>
                        <Route path='about(/:name)' component={About} />
                        <Route path='namedComponent' component={NamedComponents}>
                            <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
                        </Route>
                    </Route>

                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default App