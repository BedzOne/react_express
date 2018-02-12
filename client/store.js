import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/reducer';

const middleware = applyMiddleware(logger);

export default createStore(reducer, middleware);

// const store =  createStore(reducer, middleware);

// store.dispatch({
//   type: "REGISTERED_SUCCESS",
//   payload: true
// })

// store.dispatch({
//   type: "REGISTERED_FAIL",
//   payload: false
// })