import React, { Component } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 300px;
  background: grey;
`

class RegisterSuccess extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    setTimeout(() => {
      return null
    }, 3000);
  }

  render() {
    return(
      <Modal>Success</Modal>
    )
  }
}


export default RegisterSuccess;