import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 100%;  
`;

class Navbar extends Component {

  render() {
    return(
        <Nav>
          <h2>Navbar</h2>
          <ul>
              <Link to='/register'>Register</Link>
          </ul>
        </Nav>
    )
  }

}

export default Navbar;