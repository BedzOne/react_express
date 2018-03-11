import React, { Component } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  width: 200px;
  margin: 0 5px;
`

class Orders extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOrders()
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
                <button>Details</button>
                <button>Return</button>
              </Span>
            </li>
          )
        })
      )
    })

    return(
      <div>
        <h2>My Orders</h2>
        <ul>
          <li>
            <Span>Order date</Span>
            <Span>Order Status</Span>
            <Span>Total</Span>
            <Span>Details</Span>
          </li>
          {orders}
        </ul>
      </div>
    )
  }
}

export default Orders;