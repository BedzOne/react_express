import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Category from './Category';
import { Nav } from './styled';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let category = this.props.productsList.map(product => {
      return (
        <Category key={product._id} product={product} getProducts={this.props.getProducts} switchCategories={this.props.switchCategories}/>
      )
    })

    return(
      <Nav>
        <h1>Shop by Category</h1>
        <ul>
          {category}
        </ul>
      </Nav>
    )
  }
}

export default SideBar;