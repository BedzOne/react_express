import React, { Component } from 'react';
import axios from 'axios';

const savedUser = JSON.parse(localStorage.getItem('user'));

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    let cart = this.props.cart;
    let index = cart.findIndex((item) => {
      return item._id == this.props.item._id;
    });

    let newCart = cart.slice();
    newCart.splice(index, 1);
    axios.delete(`http://localhost:5000/cart/${savedUser._id}/?itmId=${this.props.item._id}`)
      .then(res => {
        this.props.deleteCartItem(this.props.item, newCart);
        this.props.getCart(newCart);
      })
      .catch(err => console.log(err));
  }

  render() {
    let price = this.props.item.price.toFixed(2);
    return(
      <li>
        <span>{this.props.item.name}</span>
        <span>{price}</span>
        <span>quantity: {this.props.item.quantity}</span>
        <button onClick={this.removeItem}>X</button>
      </li>
    )
  }
}

export default CartItem;