import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import RegisterReducer from './reducers/RegisterReducer';

let store = createStore(RegisterReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root')
)