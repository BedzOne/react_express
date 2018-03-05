import { combineReducers } from 'redux';

import registerReducer from './register';
import productsReducer from './product';
import userReducer from './user';
import cartReducer from './cart';
import orderReducer from './order';

export default combineReducers({
  registerReducer,
  productsReducer,
  userReducer,
  cartReducer,
  orderReducer
});