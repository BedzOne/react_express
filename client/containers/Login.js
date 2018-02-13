import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    e.preventDefault();
    console.log(this.state);
    const url = 'http://localhost:5000/user/login'; 
    axios({
      method: 'POST',
      url: url,
      data: this.state,
    }).then(response => {
      console.log(response);
      this.props.loginSuccess();
      localStorage.setItem('token', response.data.token);
      this.props.history.push('/home');
    });

  }

  handleOnChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
 
  render() {
    return(
      <div>
        <h2>Please Log in</h2>
        <form onSubmit={this.onLogin}>
          <label htmlFor='userName'>Name</label>
          <input onInput={this.handleOnChange} id='userName' name='userName' type='userName' /> 

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange} id='password' name='password' type='password' />

          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (isLoggedIn) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: true
      })
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));