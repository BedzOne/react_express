import React, { Component } from 'react';

import ProductButton from './ProductButton';

class ProductsList extends Component {
  constructor() {
    super();
  }

  render() {
    let productsList;
    productsList = this.props.productsList.map((product, index) => {
      return(
        <li key={index}>
          <div>
            <figure>
              <img src='' alt='product image' />
              <figcaption>
                <p>{product.desc}</p>
              </figcaption>
            </figure>
            <div>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
            <ProductButton />
          </div>
        </li>
      )
    })
    return(
      <div>
        <h2>Products</h2>
        <ul>{productsList}</ul>
      </div>
    )
  }
}

export default ProductsList;