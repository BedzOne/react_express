import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import axios from 'axios';

import { logUserIn, loginFail, createToken } from '../actions/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e){
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:5000/user/login',
      data: this.state,
    })
    .then(res => {
      if (res.status === 200) {
        this.props.logUserIn(res.data.users[0]);
        this.props.createToken(res.data.token);
        this.props.loginSuccess(true);
        this.props.history.push('/home');
      } else {
        this.props.loginFail(false);
      }
    })
    .catch(err => console.log(err));
  }

  handleOnChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  }
 
  render() {
    return(
      <div>
        <h2>Please Log in</h2>
        <form onSubmit={this.handleLogin}>
          <label htmlFor='email'>E-mail</label>
          <input onInput={this.handleOnChange} id='email' name='email' type='email' /> 

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange} id='password' name='password' type='password' />

          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  token: state.userReducer.token
});

const mapDispatchToProps = (dispatch) => ({
  logUserIn: (user) => dispatch(logUserIn(user)),
  loginFail: () => dispatch(loginFail()),
  createToken: (token) => dispatch(createToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));