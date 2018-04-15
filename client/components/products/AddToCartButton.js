import React, { Component } from 'react';

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
    if (this.props.isLoggedIn) {
      this.props.addItemToCart(cartItem, this.props.cart, price)
    } else {
      console.log('not logged in')
      this.props.addToCartError(true)
    }
  }

  render() {
    return(
      <button onClick={this.addToCart}>Add to Cart</button>
    )
  }
}

export default AddToCartButton;