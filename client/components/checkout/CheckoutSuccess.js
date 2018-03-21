import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';

class CheckoutSuccess extends Component {
  
  componentWillMount() {
    this.props.clearCart()
    setTimeout(() => {
      this.props.history.push('/home');
    }, 3000);
    
  }
  
  render() {
    return(
      <div>Checkout Success</div>
    ) 
  }
}

export default withRouter(CheckoutSuccess);