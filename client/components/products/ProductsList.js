import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SideBar from './SideBar';
import Product from './Product';
import { Header, Container, ProductsContainer } from './styled';

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
    });

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