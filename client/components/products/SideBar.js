import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 100%;
  width: 20%;
`;

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.switch = this.switch.bind(this);
  }

  componentWillMount() {
    this.props.getProducts()
  }

  switch(e) {
    this.props.productsList.filter(product => {
      console.log(product.tag)
      if (product.tag == e.target.id) {
        console.log('match')
        this.props.switchCategories(product.tag)
      } else {
        console.log('no')
      }
    })
  }

  render() {
    return(
      <Nav>
        <h1>Shop by Category</h1>
        <ul>
            <li onClick={this.switch} id='sports'>sports</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
        </ul>
      </Nav>
    )
  }
}

export default SideBar;