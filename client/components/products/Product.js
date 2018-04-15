import React, { Component } from 'react';

import { 
  ProductsLi, 
  ProductImg, 
  TileDesc, 
  SpanDesc, 
  SpanPrice, 
  DetailsDiv, 
  StyledLink 
} from './styled';

const url = 'http://localhost:5000/';

class Product extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let product = this.props.product;

    return(
      <ProductsLi key={product._id}>
      <ProductImg src={`${url}${product.productImage}`} alt='product image' />
        <TileDesc>
          <SpanDesc>{product.name}</SpanDesc>
          <SpanPrice>{product.price}</SpanPrice>
          <DetailsDiv>
            <StyledLink to={`/product/${product._id}`}>See details</StyledLink>
          </DetailsDiv>   
        </TileDesc> 
      </ProductsLi>
    )
  }
}

export default Product;