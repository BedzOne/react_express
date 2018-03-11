import React, { Component } from 'react';
import axios from 'axios';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  getPrice() {
    return Number(this.props.product.price) * Number(this.props.quantity).toFixed(2);
  }

  addToCart() {
    let price = this.getPrice();
    let cartItem = Object.assign({}, this.props.product);
    cartItem.price = price;
    cartItem.quantity = this.props.quantity;
    axios({
      method: 'post',
      url: `http://localhost:5000/cart/${this.props.user._id}`,
      data: cartItem
    })
    .then(res => this.props.addItemToCart(cartItem, res.data.cart, price))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <button onClick={this.addToCart}>Add to Cart</button>
    )
  }
}

export default AddToCartButton;