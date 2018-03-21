import { SHOW_PRODUCTS, SWITCH_CATEGORIES } from './constants';

export function showProducts(products) {
  return {
    type: SHOW_PRODUCTS,
    products
  };
}

export function switchCategories(category) {
  return {
    type: SWITCH_CATEGORIES,
    category
  };
}