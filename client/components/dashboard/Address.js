import React from 'react';

import { AddressContainer, AddressSpan} from './styled';

const Address = (props) => {
  let item = props.item;
  return(
    <AddressContainer>
      <AddressSpan>First Name:</AddressSpan><AddressSpan>{item.firstName}</AddressSpan>
      <AddressSpan>Last Name:</AddressSpan><AddressSpan>{item.lastName}</AddressSpan>
      <AddressSpan>Street:</AddressSpan><AddressSpan>{item.address}</AddressSpan>
      <AddressSpan>City:</AddressSpan><AddressSpan>{item.city}</AddressSpan>
      <AddressSpan>Post Code:</AddressSpan><AddressSpan>{item.postCode}</AddressSpan>
      <AddressSpan>County/State:</AddressSpan><AddressSpan>{item.countyState}</AddressSpan>
    </AddressContainer>
  )
}

export default Address;