import React, { Component } from 'react';
import { Route } from 'react-router';

import ProductDetails from '../components/products/ProductDetails';

class DetailsRoute extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let ProductDetailsRoute;
      ProductDetailsRoute = this.props.productsList.map((el) => {
        return(
          el.products.map((product) => {
            return(
              <Route 
                exact path={`/product/${product._id}`} 
                render={() => 
                  <ProductDetails 
                    productsList={this.props.productsList} 
                    key={product._id} 
                    getQuantity={this.props.getQuantity} 
                    product={product} 
                    quantity={this.props.quantity} 
                    getCart={this.props.getCart} 
                    cart={this.props.cart} 
                    addItemToCart={this.props.addItemToCart} 
                    user={this.props.user} 
                    updateCartItem={this.props.updateCartItem} 
                    isLoggedIn={this.props.isLoggedIn} 
                    addToCartError={this.props.addToCartError}
                    error={this.props.error}
                  />} 
              />
            )
          })
        )
      })

    return(
      <div>{ProductDetailsRoute}</div>
    )
  }
}

export default DetailsRoute;