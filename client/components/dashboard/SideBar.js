import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

const SideBar = () => {
  return(
    <Nav>
      <h1>Your Dashboard</h1>
      <ul>
        <li><Link to='/dashboard/profile'>Profile</Link></li>
        <li><Link to='/dashboard/settings'>Settings</Link></li>
        <li><Link to='/dashboard/myorders'>My orders</Link></li>
      </ul>
    </Nav>
  )
}

export default SideBar;