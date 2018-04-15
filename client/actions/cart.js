import { 
  ADD_ITEM_TO_CART, 
  GET_CART, 
  DELETE_CART_ITEM, 
  GET_QUANTITY, 
  UPDATE_QUANTITY,
  CLEAR_CART,
  ADD_TO_CART_ERROR
} from './constants';

const userLoggedIn = localStorage.getItem('token');
const savedUser = JSON.parse(localStorage.getItem('user'));

import axios from 'axios';

export const getCart = (cart, total) => dispatch => {
  axios.get(`http://localhost:5000/cart/${savedUser._id}`)
    .then(res => {
      total = res.data.cart.reduce((prev, cur) => {
        let result = Number(cur.price) + Number(prev);
        return result.toFixed(2);
      }, 0);
      dispatch({
        type: GET_CART,
        cart: res.data.cart,
        total
      });
    })
    .catch(err => console.log(err))
}

export const addItemToCart = (item, price) => dispatch => {
  axios({
    method: 'post',
    url: `http://localhost:5000/cart/${savedUser._id}`,
    data: item
  })
  .then(res => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      item,
      cart: res.data.cart,
      price,
    })
  })
  .catch(err => console.log(err));
}

export const deleteCartItem = (item, cart) => dispatch => {
  axios.delete(`http://localhost:5000/cart/${savedUser._id}/?itmId=${item._id}`)
      .then(res => {
        dispatch({
          type: DELETE_CART_ITEM,
          item,
          cart
        })
      })
      .catch(err => console.log(err));
}

export const getQuantity = quantity => ({
    type: GET_QUANTITY,
    quantity
});

export const updateCartItem = (quantity, price, cart) => dispatch => {
  return {
    type: UPDATE_QUANTITY,
    quantity,
    price,
    cart
  };
};

export const clearCart = cart => dispatch => {
  axios.delete(`http://localhost:5000/cart/empty/${savedUser._id}`)
  .then(res => {
    dispatch({
      type: CLEAR_CART,
      cart
    })
  })
  .catch(err => console.log(res));
};

export const addToCartError = error => ({
    type: ADD_TO_CART_ERROR,
    error
});