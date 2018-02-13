import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Auth extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      if (this.props.login.isLoggedIn) {
        this.props.history.push('/login');
      } 
      // console.log()
    }

    componentWillUpdate(nextProps) {
      if (this.props.login.isLoggedIn) {
        this.props.history.push('/login');
      } 
    }

    // return withRouter(connect(mapStateToProps)(Auth));
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loginReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(PrivateRoute);