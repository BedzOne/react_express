import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Address from './Address';
import { InnerContainer } from './styled';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser()
    this.props.getAddress();
  }

  render() {
    let addressDelivery = this.props.address.map(item => {
      return(
        <Address key={item._id} item={item}/>
      )
    })
    
    return(
      <InnerContainer>
        <h2>Profile</h2>
        <div><span>First Name: </span><span>{this.props.user.firstName}</span></div>
        <div><span>Last Name: </span><span>{this.props.user.lastName}</span></div>
        <div><span>Email: </span><span>{this.props.user.email}</span></div>
        <div><span>Phone: </span><span>{this.props.user.phone}</span></div>
        <hr/>
        <h3>Delivery Address</h3>
          {addressDelivery}
        <Link to='/dashboard/settings'><button>Make Changes</button></Link>
      </InnerContainer>
    )
  }
}

export default Profile;