import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import SideBar from './dashboard/SideBar';
import Profile from './dashboard/Profile';
import Settings from './dashboard/Settings';
import Payment from './dashboard/Payment';
import Orders from './dashboard/Orders';

const Container = styled.div`
  display: flex;
`;

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Container>
        <SideBar />
        <Route exact path='/dashboard/profile' render={() => <Profile user={this.props.user}/>} />
        <Route exact path='/dashboard/settings' render={() => <Settings logOut={this.props.logOut} user={this.props.user}/>} />
        <Route exact path='/dashboard/payment' render={() => <Payment />} />
        <Route exact path='/dashboard/myorders' render={() => <Orders />} />
      </Container>
    )
  }
}
export default Dashboard;