import {  ADD_ITEM_TO_CART, GET_CART } from '../actions/constants';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payload]
    case GET_CART: 
      let cart = localStorage.getItem('cart');
      let cartState = JSON.parse(cart);
      return {...state, cart: cartState}
  }
  return state;
}

export default cartReducer;