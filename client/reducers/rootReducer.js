import { combineReducers } from 'redux';

import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import productsReducer from './products';
import userReducer from './user';
import cartReducer from './cartReducer';

export default combineReducers({
  registerReducer,
  loginReducer,
  productsReducer,
  userReducer,
  cartReducer
});