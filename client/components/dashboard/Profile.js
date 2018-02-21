import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>Profile</h2>
        <div>
          <span>Name: </span><span>{this.props.user.userName}</span>
        </div>
        <div>
          <span>Email: </span><span>{this.props.user.email}</span>
        </div>
        <div>Addresses</div>
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