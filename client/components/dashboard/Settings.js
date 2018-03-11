import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

let userLoggedIn = localStorage.getItem('token');
    console.log(userLoggedIn)

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
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
        localStorage.setItem('user', JSON.stringify(res.data));
        const updatedUser = localStorage.getItem('user');
        const updatedUserState = JSON.parse(updatedUser);
        this.props.updateUser(updatedUserState);
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
        <h2>Change Personal Details</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input onChange={this.handleOnChange}  value={this.state.firstName} id='firstName' name='firstName' type='text' /> 

          <label htmlFor='lastName'>Last Name</label>
          <input onChange={this.handleOnChange}  value={this.state.lastName} id='lastName' name='lastName' type='text' /> 

          <label htmlFor='email'>Email</label>
          <input onChange={this.handleOnChange} value={this.state.email} id='email' name='email' type='email' required/> 

          <label htmlFor='email'>Phone Number</label>
          <input onChange={this.handleOnChange} value={this.state.phone} id='phone' name='phone' type='number' required/> 

          <label htmlFor='password'>Password</label>
          <input onChange={this.handleOnChange}  id='password' name='password' type='password' required/> 

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={this.handleOnChange} id='confirmPassword' name='confirmPassword' type='password' required />

          <input type='submit' value='Make Changes' />
        </form>

        <h2>Change Password</h2>
        <form onSubmit={this.handlePasswordSubmit}>
          <label htmlFor='password'>Existing Password</label>
          <input onChange={this.handleOnChange}  id='password' name='password' type='password' required/> 

          <label htmlFor='password'>New Password</label>
          <input onChange={this.handleOnChange}  id='password' name='password' type='password' required/> 

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input onChange={this.handleOnChange} id='confirmPassword' name='confirmPassword' type='password' required />

          <input type='submit' value='Change Password' />
        </form>

        <h2>Add/Change Address</h2>
        <form onSubmit={this.handleAddressSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input onChange={this.handleOnChange}  value={this.state.firstName} id='firstName' name='firstName' type='text' /> 

          <label htmlFor='lastName'>Last Name</label>
          <input onChange={this.handleOnChange}  value={this.state.lastName} id='lastName' name='lastName' type='text' /> 

          <label htmlFor='address'>Address</label>
          <input onChange={this.handleOnChange}  value={this.state.address} id='address' name='address' type='text' />  
          <input onChange={this.handleOnChange}  value={this.state.address} id='address' name='address' type='text' />  

          <label htmlFor='city'>City</label>
          <input onChange={this.handleOnChange}  id='city' name='city' type='text' required/> 

          <label htmlFor='county'>County/State</label>
          <input onChange={this.handleOnChange}  id='county' name='county' type='text' required/> 

          <label htmlFor='post-code'>Post Code</label>
          <input onChange={this.handleOnChange}  id='post-code' name='post-code' type='text' required/> 


          <input type='submit' value='Add/Change Address' />
        </form>
      </div>
    )
  }
}

export default withRouter(Settings);