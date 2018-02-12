import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoggedIn: false
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  // componentWillUnmount() {
  //   // this.props.registerSuccess();
  //   if (this.props.register.isRegistered) {
  //     this.onSignUp();
  //   }
  // }

  onSignUp(e, values) {
    e.preventDefault();

    const url = 'http://localhost:5000/register'; 
    const data = this.state;

    axios({
      method: 'POST',
      url: url,
      data: data,
      responseType: 'json',
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
        this.props.registerSuccess();
      })
      .catch(err => console.log(err));
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
      <h2>Please register</h2>
        <form onSubmit={this.onSignUp}>
          <label htmlFor='userName'>Name</label>
          <input onInput={this.handleOnChange} id='userName' name='userName' type='userName' />

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

const mapStateToProps = (state) => {
  return {
    register: state.registerReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerSuccess: (isRegistered) => {
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: true
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

