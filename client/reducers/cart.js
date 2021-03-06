import {  
  ADD_ITEM_TO_CART, 
  GET_CART,
  DELETE_CART_ITEM, 
  GET_QUANTITY, 
  UPDATE_QUANTITY,
  CLEAR_CART,
  ADD_TO_CART_ERROR
} from '../actions/constants';

const initialState = {
  cart: [],
  quantity: 1,
  item: {},
  total: 0,
  error: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {  
    case ADD_ITEM_TO_CART:   
      return {...state, item: action.item, cart: action.cart, price: action.price}
    case GET_CART: 
      return {...state, cart: action.cart, total: action.total};
    case GET_QUANTITY: 
      return {...state, quantity: action.quantity}
    case UPDATE_QUANTITY: 
      return {...state, quantity: action.quantity, price: action.price, cart: action.cart}
    case DELETE_CART_ITEM: 
      return {...state, cart: action.cart, item: action.item}
    case CLEAR_CART:
      return {...state, cart: initialState.cart}
    case ADD_TO_CART_ERROR: 
      return {...state, error: action.error}
  }
  return state;
}

export default cartReducer;