import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CheckoutButton extends Component {
  constructor(props) {
    super(props); 

    this.checkout = this.checkout.bind(this);
  }

  checkout() {
    console.log(1);
  }

  render() {
    return(
      <div>
      <div>{this.props.total}</div>
      <Link to='checkout' onClick={this.checkout}>Checkout</Link>
    </div>
    )
  }
}

export default CheckoutButton;