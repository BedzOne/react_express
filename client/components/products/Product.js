import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductsLi = styled.li`
  position: relative;
  width: calc((100% / 3) - 4em);
  height: 18em;
  margin-left: 2em;
  margin-right: 1em;
  margin-bottom: 3em;
  ${'' /* padding: 0.25em; */}
  padding-bottom: 0;
  background: white;
  box-shadow: 0px 0px 11px 1px rgba(138,138,138,1);
`;

const ProductImg = styled.img`
  width: calc(100% - 0.5em);
  height: 70%;
  margin-left: 0.25em;
  margin-right: 0.25em;
  margin-top: 0.25em;
`;

const TileDesc = styled.div`
  display: flex;
  height: 30%;
  flex-wrap: wrap
` 

const SpanPrice = styled.span`
  ${'' /* position: absolute; */}
  width: 50%;
  right: 0;
  bottom: 0;
  font-size: 2.5em;
  text-align: right;
`

const SpanDesc = styled.span`
  display: inline-block;
  width: 50%;
`

const DetailsDiv = styled.div`
  height: 2.2em;
  width: 100%;
  bottom: 0;
  text-transform: uppercase;
  text-align: center;
  background: #7587EA;
`

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
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