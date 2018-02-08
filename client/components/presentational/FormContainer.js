import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import Register from '../containers/loginRegister/Register';
import Login from '../containers/loginregister/Login';

class FormContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return(  
      <div>
        <div className='form__container'> 
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
          </Switch>
        </div>
      </div>
    )
  }
};

export default FormContainer;