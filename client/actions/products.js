import { SHOW_PRODUCTS } from './constants';

export function showProducts(products) {
  return {
    type: SHOW_PRODUCTS,
    payload: products
  };
}