import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return(
      <button type='submit'>Pay</button>
    )
  }
}

export default Button;