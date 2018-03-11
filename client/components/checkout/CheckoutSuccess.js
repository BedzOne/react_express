import React, { Component} from 'react';

class CheckoutSuccess extends Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }
  
  componentWillMount() {
    this.props.clearCart()
  }
  
  render() {
    return(
      <div>Checkout Success</div>
    ) 
  }
}

export default CheckoutSuccess;