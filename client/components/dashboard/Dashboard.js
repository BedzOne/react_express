import React, { Component } from 'react';
import { Route } from 'react-router';
import styled from 'styled-components';

import SideBar from './SideBar';
import Profile from './Profile';
import Settings from './Settings';
import Orders from './Orders';

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
        <Route 
          exact path='/dashboard/profile' 
          render={() => 
          <Profile 
            getUser={this.props.getUser} 
            user={this.props.user}/>} 
          />
        <Route 
          exact path='/dashboard/settings' 
          render={() => 
          <Settings 
            logOut={this.props.logOut} 
            user={this.props.user} 
            updateUser={this.props.updateUser} 
            changeAddress={this.props.changeAddress}/>} 
          />
        <Route 
          exact path='/dashboard/myorders' 
          render={() => 
        <Orders 
          orders={this.props.orders} 
          getOrders={this.props.getOrders}/>} 
        />
      </Container>
    )
  }
}

export default Dashboard;