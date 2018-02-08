import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 100%;  
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(  
        <Nav>
          <h2>Navbar</h2>
          <ul>
            {this.props.isRegistered ? 
              <li><Link to='/dashboard'>Dashboard</Link></li>
            : null}
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
        </Nav>
    )
  }

}

export default Navbar;