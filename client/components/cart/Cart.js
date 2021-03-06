import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import CheckoutButton from '../checkout/CheckoutButton';
import BackButton from '../buttons/BackButton';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    let total = this.props.cart.reduce((prev, cur) => {
      let result = Number(cur.price) + Number(prev);
      return result.toFixed(2);
    }, 0);

    let cart;
    cart = this.props.cart.map((item, index) => {
      return(
        <CartItem 
          key={index} 
          item={item} 
          total={this.props.total}
          cart={this.props.cart}
          deleteCartItem={this.props.deleteCartItem} 
          getCart={this.props.getCart} 
        />
      )
    });

    return(
      <div>
        <h2>My Cart</h2>
        <ul>{cart}</ul>
        <div>{this.props.cart.length > 0 ? `${total}` : 'Your cart is empty'}</div>
        <CheckoutButton total={total}/>
        <Link to='/home'><BackButton /></Link>
      </div>
    )
  }
}

export default Cart;