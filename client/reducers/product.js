import { SHOW_PRODUCTS } from '../actions/constants';

const initialState = {
  productsList: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PRODUCTS: 
      return {...state, productsList: action.payload}
  }
  return state;
}

export default productsReducer;