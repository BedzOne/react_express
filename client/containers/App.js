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

import { logOut, loginSuccess } from '../actions/login';

import '../App.scss';

const userLoggedIn = localStorage.getItem('token');

class App extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    if (userLoggedIn) {
      this.props.loginSuccess(true);
    }
  }


  render() {
    return(
      <Router history={history}>
        <div>
          <Navbar isLoggedIn={this.props.isLoggedIn} logOut={this.props.logOut} /> 
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/login' render={() => <Login />} />
            <Route path='/dashboard' 
                   render={() => (!this.props.loginSuccess ? (
              <Redirect to='/login' />) : (<Dashboard />))} />
            <Route exact path='/register' 
                   render={() => (this.props.register.isRegistered ? (
                <Redirect to='/login' />) : (<Register />))} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.registerReducer,
    isLoggedIn: state.loginReducer.isLoggedIn,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (isLoggedIn) => {
      dispatch(logOut(false))
    },

    loginSuccess: (isLoggedIn) => {
      dispatch(loginSuccess(true))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);