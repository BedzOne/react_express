import React, { Component } from 'react';
import axios from 'axios';

const savedUser = JSON.parse(localStorage.getItem('user'));

class Checkout extends Component {
  constructor(props) {
    super(props); 

    this.pay = this.pay.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  componentDidMount() {
    this.props.getCart()
  }

  pay() {
    this.props.getCart()
    console.log(this.props.cart)
    axios({
      method: 'post',
      url: `http://localhost:5000/order/${savedUser._id}`,
      data: {order: this.props.cart, total: this.props.total}
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name{this.props.total}</label>
          <input type='text' name='name' id='name' />

          <label htmlFor='cardNumber'>Card number</label>
          <input type='number' name='cardNumber' id='cardNumber' />

          <label htmlFor='expiry'>Expiry date</label>
          <input type='text' name='expiry' id='expiry' />

          <label htmlFor='cvc'>CVC</label>
          <input type='text' name='cvc' id='cvc' />

          <input onClick={this.pay}type='submit' value='Pay' />
        </form>

        <div>total: {this.props.total}</div>
        <div>Items in basket: {this.props.cart.length}</div>
      </div>
    )
  }
}

export default Checkout;