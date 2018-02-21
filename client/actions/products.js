import { SHOW_PRODUCTS, SELECT_PRODUCT, GET_SINGLE_PRODUCT } from './constants';

export function showProducts(products) {
  return {
    type: SHOW_PRODUCTS,
    payload: products
  };
}