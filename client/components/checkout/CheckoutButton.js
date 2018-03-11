import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CheckoutButton extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return(
      <div>
      <div>{this.props.total}</div>
      <Link to='checkout'>Checkout</Link>
    </div>
    )
  }
}

export default CheckoutButton;