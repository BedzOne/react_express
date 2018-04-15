import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Span } from './styled';

class Orders extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    let orders = this.props.orders.map((order) => {
      return(
        order.order.map(item => {
          return(
            <li>
              <Span>{(order.createdAt).split('T')[0]}</Span>
              <Span>Ordered</Span>
              <Span><span>£</span><span>{order.total}</span></Span>
              <Span>
                <Link to='/dashboard/myorders/details'>Details</Link>
              </Span>
            </li>
          )
        })
      )
    })

    return(
      <div>
        <h2>My Orders</h2>
        {this.props.orders.length > 0 ? 
          <ul>
            <li>
              <Span>Order date</Span>
              <Span>Order Status</Span>
              <Span>Total</Span>
              <Span>Details</Span>
            </li>
            {orders}
          </ul>
        : <span>You haven't bought anything yet</span>}
      </div>
    )
  }
}

export default Orders;