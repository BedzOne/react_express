import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './SideBar';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const ProductsLi = styled.li`
  position: relative;
  width: calc((100% / 3) - 4em);
  height: 18em;
  margin-left: 2em;
  margin-right: 1em;
  margin-bottom: 3em;
  padding-bottom: 0;
  background: white;
  box-shadow: 0px 0px 11px 1px rgba(138,138,138,1);
`;

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let productsList;
    let singleCategory;

    let match = this.props.productsList.some((el) => {
      if (this.props.category === el.id) {
        return true;
      }
    })

    if (this.props.category === null) {
      productsList = this.props.productsList.map((el) => {
        return (
          el.products.map((product) => { 
            return(
              <Product key={product._id} product={product}/>
            )
          })
        ) 
      })
    } else {
      let singleCategory = this.props.productsList.filter((el) => {
        if (this.props.category === el._id) {
          return el;
        }
      })

      productsList = singleCategory[0].products.map(product => {
        return(
          <Product key={product._id} product={product}/>
        )
      })
    }

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