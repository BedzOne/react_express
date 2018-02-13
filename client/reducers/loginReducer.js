import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from '../actions/constants';

const initialState = {
  isLoggedIn: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: 
      return {...state, isLoggedIn: action.payload }

    case LOGIN_FAIL: 
      return {...state, isLoggedIn: action.payload }

    case LOG_OUT: 
      return {...state, isLoggedIn: action.payload}
  }
  return state;
}

export default loginReducer;