import React, { Component } from 'react';

import { Modal, CloseButton} from './styled';

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