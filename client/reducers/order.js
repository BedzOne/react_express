import { BUILD_ORDER, GET_ORDERS, ORDER_SUCCESS, ORDER_FAIL } from '../actions/constants';

const initialState = {
  cart: [],
  total: 0,
  order: [],
  date: '',
  orders: [],
  success: false,
  fail: false
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUILD_ORDER: 
      return {...state, cart: action.cart, total: action.total, order: action.order, date: new Date()}
    case GET_ORDERS: 
      return {...state, orders: action.orders}
    case ORDER_SUCCESS: 
      return {...state, orderSuccess: action.success}
    case ORDER_FAIL:
      return {...state, orderFail: action.fail}
  }
  return state;
}

export default orderReducer;