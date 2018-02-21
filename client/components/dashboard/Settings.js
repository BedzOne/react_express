import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import { updateUser, getUser } from '../../actions/user';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.user.userName,
      email: this.props.user.email,
      password: '',
      confirmPassword: '',
      addressBilling: this.props.user.addressBilling,
      addressDelivery: this.props.user.addressDelivery
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let userLoggedIn = localStorage.getItem('token');

    if (userLoggedIn) {
      axios({
        method: 'PUT',
        url: `http://localhost:5000/user/${this.props.user._id}`,
        headers: {'Authorization': `Bearer ${userLoggedIn}`},
        data: this.state
      })
      .then((res) => {
        this.props.logOut();
        localStorage.clear();
        this.props.history.push('/login');
      })
      .catch(err => console.log(err))
    }
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
    let user = this.props.currentUser;
    return(
      <div>
        <div>Settings</div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='userName'>Name</label>
          <input onChange={this.handleOnChange}  value={this.state.userName} id='userName' name='userName' type='text' /> 

          <label htmlFor='email'>Email</label>
          <input onChange={this.handleOnChange} value={this.state.email} id='email' name='email' type='email' required/> 

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange}  id='password' name='password' type='password' required/> 

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={this.handleOnChange} id='confirmPassword' name='confirmPassword' type='password' required />

          <label htmlFor='addressBilling'>Billing Address</label>
          <input onChange={this.handleOnChange} value={this.state.addressBilling} id='addressBilling' name='addressBilling' type='text' /> 

          <label htmlFor='addressDelivery'>Delivery Address</label>
          <input onChange={this.handleOnChange} value={this.state.addressDelivery} id='addressDelivery' name='addressDelivery' type='text' /> 

          <input type='submit' value='Make Changes' />
        </form>
      </div>
    )
  }
}

export default withRouter(Settings);