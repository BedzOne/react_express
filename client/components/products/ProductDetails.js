import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddToCartButton from './AddToCartButton';
import BackButton from '../buttons/BackButton';

const url = 'http://localhost:5000/';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  componentWillMount() {
    this.props.getQuantity(1);
  }

  componentWillReceiveProps(nextProps) {
    this.props.getQuantity(nextProps.quantity);
  }

  handleQuantityChange(e) {
    let quantity = Number(e.target.value);
    this.props.getQuantity(quantity);
  }

  getPrice() {
    return (Number(this.props.product.price) * Number(this.props.quantity)).toFixed(2);
  }

  render() {
    let product = this.props.product;
    let quantityNums = [1,2,3,4,5,6,7,8,9,10];
    let quantityOptions = quantityNums.map((num) => {
      return(
        <option key={num} value={num}>{num}</option>
      )
    });

    return(
      <div>
        <div>
          <figure>
            <img src={`${url}${product.productImage}`} alt='product image' />
          </figure>
        </div>
        <div>
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <div>
            <span>{product.price}</span>
            <AddToCartButton 
              addItemToCart={this.props.addItemToCart} 
              product={product}
              getPrice={this.getPrice}
              quantity={this.props.quantity}
              user={this.props.user}
              cart={this.props.cart}
              getCart={this.props.getCart}
              updateCartItem={this.props.updateCartItem}
              total={this.props.total}
            />
            <select onChange={this.handleQuantityChange}>
              {quantityOptions}
            </select>
            <div>{this.getPrice()}</div>
          </div>
        </div>
        <Link to='/home'><BackButton /></Link>
      </div>
    )
  }
}

export default ProductDetails;