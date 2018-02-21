import React, { Component } from 'react';

import AddToCartButton from './AddToCartButton';

const url = 'http://localhost:5000/';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let product = this.props.product;
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
            <AddToCartButton product={this.props.product}/>
          </div>
        </div>
      </div>
    )
  }

}

export default ProductDetails;