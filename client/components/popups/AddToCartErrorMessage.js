import React, { Component } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  height: 400px;
  width: 400px;
  background: grey;
`

const CloseButton = styled.span`
  position: absolute;
  top: 2%;
  right: 5%;
  color: black;
  font-size: 1.1em;
`

const AddToCartErrorMessage = (props) => {
  
  function closeModal() {
    props.addToCartError(false)
  }

  return(
    <Modal>
      <CloseButton onClick={closeModal}>X</CloseButton>
      Error
    </Modal>
  )
}

export default AddToCartErrorMessage