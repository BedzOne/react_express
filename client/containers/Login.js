import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

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
    const url = 'http://localhost:5000/user/login'; 
    axios({
      method: 'POST',
      url: url,
      data: this.state,
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.users[0]));
      const loggedUser = localStorage.getItem('user');
      const userState = JSON.parse(loggedUser);
      this.props.loginSuccess(true);
      this.props.updateUser(userState);
      this.props.history.push('/home');
    })
    .catch(err => console.log(err));
  }

  handleOnChange(e) {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
 
  render() {
    return(
      <div>
        <h2>Please Log in</h2>
        <form onSubmit={this.onLogin}>
          <label htmlFor='userName'>Name</label>
          <input onInput={this.handleOnChange} id='userName' name='userName' type='text' /> 

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange} id='password' name='password' type='password' />

          <input type='submit' value='Login' />
        </form>
      </div>
    )
  }
}

export default withRouter(Login);