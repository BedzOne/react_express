import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import Register from './containers/loginRegister/Register';
import Navbar from './presentational/Navbar';
import Home from './presentational/Home';
import Dashboard from './presentational/Dashboard';
import Login from './containers/loginregister/Login';

import '../App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isHomePage: true,
      isRegistered: false
    }

    this.userRegistered = this.userRegistered.bind(this)
  }

  userRegistered() {
    this.setState({isRegistered: true}, () => {
      console.log(this.state)
    })
  }


  render() {
    return(
      <Router history={history}>
        <div>
          <Navbar isRegistered={this.state.isRegistered}/> 
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/register' render={() => <Register userRegistered={this.userRegistered} isRegistered={this.state.isRegistered}/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;