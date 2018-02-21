import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  height: 100%;
  width: 20%;
`;

const SideBar = () => {
  return(
    <Nav>
      <h1>Your Dashboard</h1>
      <ul>
        <li><Link to='/dashboard/profile'>Profile</Link></li>
        <li><Link to='/dashboard/settings'>Settings</Link></li>
        <li><Link to='/dashboard/payment'>Payment</Link></li>
        <li><Link to='/dashboard/myorders'>My orders</Link></li>
      </ul>
    </Nav>
  )
}

export default SideBar;