import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp(e) {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'http://localhost:5000/user/register',
      data: this.state,
      responseType: 'json',
      headers: { "Content-Type": "application/json" }
    }).then((res) => {
        this.props.registerSuccess(true);
        this.props.history.push('/login');
      })
      .catch(err => console.log(err));
  }

  handleOnChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }
 
  render() {
    return(
      <div>
      <h2>Please register</h2>
        <form onSubmit={this.onSignUp}>
          <label htmlFor='firstName'>First Name</label>
          <input onInput={this.handleOnChange} id='firstName' name='firstName' type='text' />

          <label htmlFor='lastName'>Last Name</label>
          <input onInput={this.handleOnChange} id='lastName' name='lastName' type='text' />

          <label htmlFor='email'>E-mail</label>
          <input onChange={this.handleOnChange} id='email' name='email' type='email' />

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange} id='password' name='password' type='password' />

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={this.handleOnChange} id='confirmPassword' name='confirmPassword' type='password' />

          <input type='submit' value='Register' />
        </form>
      </div>
    )
  }
}

export default withRouter(Register);

