import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp(e) {
    e.preventDefault();
    console.log(this.state)

    const url = 'http://localhost:5000/users';
    const data = this.state;

    axios({
      method: 'POST',
      url: 'http://localhost:5000/users',
      data: this.state,
      responseType: 'json',
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
        console.log(JSON.stringify(response));
      })
      .catch(err => console.log(err))
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

export default Login;