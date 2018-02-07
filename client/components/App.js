import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import Register from './containers/loginRegister/Register';
import Navbar from './presentational/Navbar';
import FormContainer from './presentational/FormContainer';
import '../App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router history={history}>
        <div>
          <Navbar />
          <FormContainer />
        </div>
      </Router>
    )
  }
}

export default App;