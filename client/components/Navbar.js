import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { NavListItem, CartItems, Nav, NavList} from './styled';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
    this.showAllProducts = this.showAllProducts.bind(this);
  }

  showAllProducts() {
    this.props.getProducts();
  }

  logoutUser(user) {
    this.props.logOut(false, user);
  }

  navLinks() {
    if (this.props.isLoggedIn) {
      return [
        <NavListItem key='4'><Link to='/dashboard/profile'>Dashboard</Link></NavListItem>,
        <NavListItem key='5'><Link to='/home' onClick={this.logoutUser} >Logout</Link></NavListItem>,
        <NavListItem key='3'><Link to='/cart'><i className="fas fa-shopping-cart"></i><CartItems>{this.props.cart ? this.props.cart.length : null}</CartItems></Link></NavListItem>
      ]
    }
    return [
      <NavListItem key='6'><Link to='/register'>Register</Link></NavListItem>,
      <NavListItem key='7'><Link to='/login'>Login</Link></NavListItem>
    ]
  }

  render() {
    return(  
      <Nav>
        <h2>React Shop</h2>
        <NavList>
          <NavListItem key='1'><Link onClick={this.showAllProducts} to='/home'>Home</Link></NavListItem>
          {this.navLinks()}
        </NavList>
      </Nav>
    )
  }
}

export default Navbar;