import { SHOW_PRODUCTS, SELECT_PRODUCT, SHOW_PRODUCT_DETAILS } from '../actions/constants';

const initialState = {
  productsList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS: 
      return {...state, productsList: action.payload}
    case SHOW_PRODUCT_DETAILS:
      return {...state, product: action.payload}
  }
  return state;
}

export default productsReducer;