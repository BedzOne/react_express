import { 
  BUILD_ORDER, 
  GET_ORDERS, 
  ORDER_SUCCESS, 
  ORDER_FAIL  
} from './constants';

import axios from 'axios';
const savedUser = JSON.parse(localStorage.getItem('user'));

export const buildOrder = (cart, total, order, date) => dispatch => {
  axios({
    method: 'post',
    url: `http://localhost:5000/order/${savedUser._id}`,
    data: {order: cart, total: total}
  })
  .then(res => {
    dispatch({
      type: BUILD_ORDER,
      cart,
      total,
      order: res.data.cart,
      date: res.data.order.updatedAt
    })
  })
  .catch(err => console.log(err))
}

export const getOrders = orders => dispatch => {
  axios.get(`http://localhost:5000/order/${savedUser._id}`)
  .then(res => {
    dispatch({
      type: GET_ORDERS,
      orders: res.data.order
    })
  })
  .catch(err => console.log(err))
}

export const checkOrderSuccess = success => ({
    type: ORDER_SUCCESS,
    succes
});

export const checkOrderFail = fail => ({
    type: ORDER_FAIL,
    fail
});
