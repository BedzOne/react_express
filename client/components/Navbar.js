import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 100%;  
`;

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logOut();
  }

  render() {
    return(  
        <Nav>
          <h2>Navbar</h2>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            {this.props.isLoggedIn ? 
              <li><Link to='/dashboard'>Dashboard</Link></li>
            : null}

            {this.props.isLoggedIn ? 
              <li><Link onClick={this.logoutUser} to='/home'>Logout</Link></li>
            : null}
            
            {!this.props.isLoggedIn ? 
              <li><Link to='/register'>Register</Link></li>
            : null}

            {!this.props.isLoggedIn ? 
              <li><Link to='/login'>Login</Link></li>
            : null}
          </ul>
        </Nav>
    )
  }
}

export default withRouter(Navbar);