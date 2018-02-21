import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import AddToCartButton from './AddToCartButton';
import ProductDetailsButton from './ProductDetailsButton';

const ProductsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`;

const ProductsLi = styled.li`
${'' /* display: flex; */}
  width: calc((100% / 3) - 4em);
  height: 15em;
  margin-left: 2em;
  margin-right: 1em;
  margin-bottom: 3em;
  padding: 0.5em;
  ${'' /* border: 0.05em solid grey; */}
`;

const ProductImg = styled.img`
  width: 100%;
  height: 80%;
`;

const Header = styled.h2`
  text-align: center;
`;

const FigCaption = styled.figcaption`
  width: 100%;
  ${'' /* height: 20%; */}
  padding: 1em;
  border-top: 0.01em solid grey;
`;

const Figure = styled.figure`
  width: 100%;
  ${'' /* height: 100%; */}
  padding: 0.5em;
  margin:0;
  margin-bottom: 2em;
  
`;

const url = 'http://localhost:5000/';

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProducts(); 
  }

  render() {
    let productsList;
    productsList = this.props.productsList.map((product, index) => {
      return(
        <ProductsLi key={product._id}>
              <ProductImg src={`${url}${product.productImage}`} alt='product image' />
                <span>{product.name}</span>
                <span>{product.price}</span>
                <div>
                  <Link to={`/product/${product._id}`}>See details</Link>
                  <AddToCartButton addItemToCart={this.props.addItemToCart} product={product}/>
                </div>   
        </ProductsLi>
      )
    })
    return(
      <div>
        <Header>Products</Header>
        <ProductsContainer>{productsList}</ProductsContainer>
      </div>
    )
  }
}

export default ProductsList;