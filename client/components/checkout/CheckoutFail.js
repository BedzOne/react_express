import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

class CheckoutFail extends Component {
  
  // componentWillMount() {
  //   // this.props.clearCart()
  //   setTimeout(() => {
  //     this.props.history.push('/checkout');
  //   }, 3000);
  // }
  
  render() {
    return(
      <div>Checkout Fail</div>
    ) 
  }
}

export default withRouter(CheckoutFail);