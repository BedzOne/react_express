import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import Register from './Register';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import Login from './Login';
import { registerSuccess } from '../actions/register';
import { loginSuccess } from '../actions/login';

import '../App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router history={history}>
        <div>
          <Navbar isLoggedIn={this.props.login.isLoggedIn} logOut={this.props.logOut}/> 
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' render={() => <Login />}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/register' render={() => (
              this.props.register.isRegistered ? (
                <Redirect to='/login' />
              ) : (
                <Register />
              )
            )}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.registerReducer,
    login: state.loginReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (isLoggedIn) => {
      dispatch({
        type: "LOG_OUT",
        payload: false
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);