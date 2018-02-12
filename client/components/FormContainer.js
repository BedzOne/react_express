import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from '../containers/Register';
import Login from '../containers/Login';

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