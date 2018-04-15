import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

import { Form } from './styled';

let userLoggedIn = localStorage.getItem('token');
const savedUser = JSON.parse(localStorage.getItem('user'));

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      email: this.props.user.email,
      phone: this.props.user.phone,
      password: '',
      confirmPassword: '',
      newPassword: '',
      addressBilling: this.props.user.addressBilling,
        address: '',
        city: '',
        countyState: '',
        postCode: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  handleSubmit(e) {
    e.preventDefault();
    let userLoggedIn = localStorage.getItem('token');
    if (userLoggedIn) {
      axios({
        method: 'PUT',
        url: `http://localhost:5000/user/${this.props.user._id}`,
        headers: {Authorization: `Bearer ${userLoggedIn}`},
        data: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phone: this.state.phone,
          password: this.state.password
        }
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        const updatedUser = localStorage.getItem('user');
        const updatedUserState = JSON.parse(updatedUser);
        this.props.updateUser(updatedUserState);
      })
      .catch(err => console.log(err))
    }
    this.props.logOut();
    localStorage.clear();
    this.props.history.push('/login');
  }

  handlePasswordSubmit(e) {
    e.preventDefault();
    if (userLoggedIn) {
      axios({
        method: 'POST',
        url: `http://localhost:5000/user/password/${savedUser._id}`,
        headers: {Authorization: `Bearer ${userLoggedIn}`},
        data: {
          password: this.state.password,
          newPassword: this.state.newPassword,
          confirmPassword: this.state.confirmPassword
        }
      })
      .then(res => {
        this.props.logOut();
        localStorage.clear();
        this.props.history.push('/login');
      })
      .catch(err => console.log(err))
    }
  }

  handleAddressSubmit(e) {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: `http://localhost:5000/user/address/${savedUser._id}`,
      headers: {Authorization: `Bearer ${userLoggedIn}`},
      data: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        city: this.state.city,
        countyState: this.state.countyState,
        postCode: this.state.postCode
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  handleOnChange(e) {
    // e.preventDefault();
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
        <div>Settings</div>

        <h2>Change Personal Details</h2>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input onChange={this.handleOnChange}  value={this.state.firstName} id='firstName' name='firstName' type='text' /> 

          <label htmlFor='lastName'>Last Name</label>
          <input onChange={this.handleOnChange}  value={this.state.lastName} id='lastName' name='lastName' type='text' /> 

          <label htmlFor='email'>Email</label>
          <input onChange={this.handleOnChange} value={this.state.email} id='email' name='email' type='email' required/> 

          <label htmlFor='email'>Phone Number</label>
          <input onChange={this.handleOnChange} value={this.state.phone} id='phone' name='phone' type='text' required/> 

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange} id='password' name='password' type='password' required/> 

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={this.handleOnChange} id='confirmPassword' name='confirmPassword' type='password' required />

          <input type='submit' value='Make Changes' />
        </Form>

        <h2>Change Password</h2>
        <Form onSubmit={this.handlePasswordSubmit}>
          <label htmlFor='password'>Existing Password</label>
          <input onChange={this.handleOnChange}  id='password' name='password' type='password' required/> 

          <label htmlFor='newPassword'>New Password</label>
          <input onChange={this.handleOnChange}  id='newPassword' name='newPassword' type='password' required/> 

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={this.handleOnChange}  id='confirmPassword' name='confirmPassword' type='password' required />

          <input type='submit' value='Change Password' />
        </Form>

        <h2>Add/Change Address</h2>
        <Form onSubmit={this.handleAddressSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input onChange={this.handleOnChange}  value={this.state.firstName} id='firstName' name='firstName' type='text' /> 

          <label htmlFor='lastName'>Last Name</label>
          <input onChange={this.handleOnChange}  value={this.state.lastName} id='lastName' name='lastName' type='text' /> 

          <label htmlFor='address'>Address</label>
          <input onChange={this.handleOnChange}  value={this.state.address} id='address' name='address' type='text' />  
          {/* <input onChange={this.handleOnChange}  value={this.state.address} id='address' name='address' type='text' />   */}

          <label htmlFor='city'>City</label>
          <input onChange={this.handleOnChange}  value={this.state.city} id='city' name='city' type='text' required/> 

          <label htmlFor='countyState'>County/State</label>
          <input onChange={this.handleOnChange}  value={this.state.countyState} id='countyState' name='countyState' type='text' required/> 

          <label htmlFor='postCode'>Post Code</label>
          <input onChange={this.handleOnChange}  value={this.state.postCode} id='postCode' name='postCode' type='text' required/> 
          
          <input type='submit' value='Add/Change Address' />
        </Form>
      </div>
    )
  }
}

export default withRouter(Settings);