import React, { Component } from 'react';
import { Route } from 'react-router';

import OrderDetails from './OrderDetails';

class OrderDetailsRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let DetailsRoute = this.props.orders.map(el => {
      return(
        el.order.map(order => {
          return( 
           <Route 
            exact path='/dashboard/myorders/details' 
            render={() => <OrderDetails key={order._id} order={order}/>}/>)
        })
      )
    });
    
    return( 
      <div>{DetailsRoute}</div>
    )
  }
}

export default OrderDetailsRoute;