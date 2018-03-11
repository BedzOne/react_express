import { 
  BUILD_ORDER, 
  GET_ORDERS, 
  ORDER_SUCCESS, 
  ORDER_FAIL  
} from './constants';

export function buildOrder(cart, total, order, date) {
  return {
    type: BUILD_ORDER,
    cart,
    total,
    order,
    date
  };
}

export function getOrders(orders) {
  return {
    type: GET_ORDERS,
    orders
  }
}

export function checkOrderSuccess(success) {
  return {
    type: ORDER_SUCCESS,
    success
  }
}

export function checkOrderFail(fail) {
  return {
    type: ORDER_FAIL,
    fail
  }
}
