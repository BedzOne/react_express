import { SHOW_PRODUCTS, SELECT_PRODUCT } from './constants';

export function showProducts(products) {
  return {
    type: SHOW_PRODUCTS,
    payload: products
  };
}