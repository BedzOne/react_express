import React, { Component } from 'react';
import axios from 'axios';

class AddToCartButton extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    let product = this.props.product;

    axios.get(`http://localhost:5000/product/${product._id}`)
      .then((res) => {
        this.props.addItemToCart(res.data);
        localStorage.setItem('cartItem', JSON.stringify(res.data));
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart == null) cart = []; 
        let cartItem = localStorage.getItem('cartItem');
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
      })
      .catch(err => console.log(err));
    
  }

  render() {
    return(
      <button onClick={this.addToCart}>Add to Cart</button>
    )
  }
}

export default AddToCartButton;