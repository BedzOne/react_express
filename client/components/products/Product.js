import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductsLi = styled.li`
  position: relative;
  width: calc((100% / 3) - 4em);
  height: 15em;
  margin-left: 2em;
  margin-right: 1em;
  margin-bottom: 3em;
  padding: 0.25em;
  background: white;
  box-shadow: 0px 0px 11px 1px rgba(138,138,138,1);
`;

const ProductImg = styled.img`
  width: 100%;
  height: 80%;
`;

const SpanPrice = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 2.5em;
`

const DetailsDiv = styled.div`
  position: absolute;
  bottom: 0;
  text-transform: uppercase;
`

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
        <span>{product.name}</span>
        <SpanPrice>{product.price}</SpanPrice>
        <DetailsDiv>
          <Link to={`/product/${product._id}`}>See details</Link>
        </DetailsDiv>   
      </ProductsLi>
    )
  }
}

export default Product;