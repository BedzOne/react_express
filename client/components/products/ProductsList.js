import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${'' /* margin-top: 5em; */}
`
const ProductsContainer = styled.ul`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`;


const Header = styled.h2`
  width: 100%;
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

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let productsList;
    productsList = this.props.productsList.map((product, index) => {
      return(
        <Product 
          key={product._id}
          product={product}
          category={product.category}
        />
      )
    })

    return(
      <Container>
        <Header>Products</Header>
        <SideBar 
          getProducts={this.props.getProducts} 
          switchCategories={this.props.switchCategories} 
          productsList={this.props.productsList}
        />
        <ProductsContainer>{productsList}</ProductsContainer>
      </Container>
    )
  }
}

export default ProductsList;