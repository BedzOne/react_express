import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

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