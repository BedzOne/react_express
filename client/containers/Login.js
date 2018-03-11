import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:5000/user/login',
      data: this.state,
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.users[0]));
      const loggedUser = localStorage.getItem('user');
      const userState = JSON.parse(loggedUser);
      this.props.loginSuccess(true);
      this.props.getUser(userState);
      this.props.history.push('/home');
    })
    .catch(err => console.log(err));
  }

  handleOnChange(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }
 
  render() {
    return(
      <div>
        <h2>Please Log in</h2>
        <form onSubmit={this.onLogin}>
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

export default withRouter(Login);