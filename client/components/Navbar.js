import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 100%;  
  border-bottom: 0.01em solid black;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: 1em;
`;

const NavListItem = styled.li`
  margin-left: 1em;
`;

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
        <NavListItem key='3'><Link to='/cart'>Cart</Link></NavListItem>,
        <NavListItem key='4'><Link to='/dashboard/profile'>Dashboard</Link></NavListItem>,
        <NavListItem key='5'><Link onClick={this.logoutUser} to='/home'>Logout</Link></NavListItem>
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
        <h2>Navbar</h2>
        <NavList>
          <NavListItem key='1'><Link to='/home'>Home</Link></NavListItem>
          <NavListItem key='2'>Products</NavListItem>
          {this.navLinks()}
        </NavList>
      </Nav>
    )
  }
}

export default Navbar;