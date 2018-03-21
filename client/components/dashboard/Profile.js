import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.user);
    // this.props.getUser();
  } 

  render() {
    return(
      <div>
        <h2>Profile</h2>
        <div><span>First Name: </span><span>{this.props.user.firstName}</span></div>
        <div><span>Last Name: </span><span>{this.props.user.lastName}</span></div>
        <div><span>Email: </span><span>{this.props.user.email}</span></div>
        <div><span>Phone: </span><span>{this.props.user.telephone}</span></div>
        <hr/>
        <h3>Addresses</h3>
        <div>
          <span>Delivery Address: </span><span>{this.props.user.addressDelivery}</span>
        </div>
        <div>
          <span>Billing Address: </span><span>{this.props.user.addressBilling}</span>
        </div>
        <Link to='/dashboard/settings'><button>Make Changes</button></Link>
      </div>
    )
  }
}

export default Profile;