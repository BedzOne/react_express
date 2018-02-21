import { ADD_ITEM_TO_CART, GET_CART } from './constants';

export function addItemToCart(product) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product
  };
}

export function showCart(cart) {
  return {
    type: GET_CART,
    payload: cart
  };
}