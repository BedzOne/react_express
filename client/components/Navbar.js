import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;  
  height: 5em;
  position: absolute;
  top: 0;
  left: 0;
  background: #F87256 ; 
  padding: 0 2em;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  ${'' /* margin-right: 1em; */}
`;

const NavListItem = styled.li`
  margin-left: 1em;
`;

const CartItems = styled.span`
  color: white;
  margin-left: 0.2em;
  font-size: 1.2em;
`

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(user) {
    this.props.logOut(false, user);
  }

  navLinks() {
    if (this.props.isLoggedIn) {
      return [
        <NavListItem key='4'><Link to='/dashboard/profile'>Dashboard</Link></NavListItem>,
        <NavListItem key='5'><Link onClick={this.logoutUser} to='/home'>Logout</Link></NavListItem>,
        <NavListItem key='3'><Link to='/cart'><i class="fas fa-shopping-cart"></i><CartItems>{this.props.cart.length}</CartItems></Link></NavListItem>
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
          <NavListItem key='1'><Link to='/home'>Home</Link></NavListItem>
          {this.navLinks()}
        </NavList>
      </Nav>
    )
  }
}

export default Navbar;