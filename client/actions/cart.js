import { ADD_ITEM_TO_CART, GET_CART, DELETE_CART_ITEM, GET_QUANTITY, UPDATE_QUANTITY } from './constants';

export function getCart(cart, total) {
  return {
    type: GET_CART,
    cart,
    total
  };
}

export function addItemToCart(item, cart, price) {
  return {
    type: ADD_ITEM_TO_CART,
    item,
    cart,
    price,
  };
}

export function deleteCartItem(item, cart) {
  return {
    type: DELETE_CART_ITEM,
    item,
    cart
  };
}

export function getQuantity(quantity) {
  return {
    type: GET_QUANTITY,
    quantity
  };
}

export function updateCartItem(quantity, price, cart) {
  return {
    type: UPDATE_QUANTITY,
    quantity,
    price,
    cart
  };
}