import { combineReducers } from 'redux';

import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import productsReducer from './products';

export default combineReducers({
  registerReducer,
  loginReducer,
  productsReducer
});