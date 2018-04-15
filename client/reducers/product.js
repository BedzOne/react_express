import { SHOW_PRODUCTS, SWITCH_CATEGORIES } from '../actions/constants';

const initialState = {
  productsList: [],
  category: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS: 
      return {...state, productsList: action.products, category: initialState.category}
    case SWITCH_CATEGORIES:
      return {...state, category: action.category}
  }
  return state;
}

export default productsReducer;