import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'GBP';
const STRIPE_PUBLISHABLE = 'pk_test_M3OXnqwI8FlBlVpRlj8Zsnir';

const amountInCents = amount => (amount * 100).toFixed(0);

const savedUser = JSON.parse(localStorage.getItem('user'));

class Checkout extends Component {
  constructor(props) {
    super(props); 

    this.onToken = this.onToken.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  componentDidMount() {
    this.props.getCart()
  }

  onToken(token) {
    axios({
      method: 'post',
      url: 'http://localhost:5000/charge', 
      data: { 
        stripeToken: token,
        amount: (this.props.amount * 100).toFixed(0),
        currency: CURRENCY,
      }
    })
    .then(res => {
      this.props.getCart();
      this.props.buildOrder(this.props.cart, this.props.total)
    })
    .then(res => {
      this.props.orderSuccess(true)
      this.props.history.push('/checkout-success');
    })
    .catch(err => console.log('pay fail'));
  }



  render() {
    return(
      <div>
        <StripeCheckout
          name={'payment'}
          description={this.props.description}
          ComponentClass='Button'
          email={this.props.user.email}
          amount={amountInCents(this.props.amount)}
          token={this.onToken}
          currency={CURRENCY}
          stripeKey={STRIPE_PUBLISHABLE}
        />
    </div>
    )
  }
}

export default withRouter(Checkout);