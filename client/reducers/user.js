import { 
  GET_USER, 
  UPDATE_USER, 
  DELETE_USER,
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOG_IN,
  LOG_OUT,
  UPDATE_ADDRESS,
  TOKEN_EXPIRED_NOTIFY,
  GET_ADDRESS,
  CREATE_TOKEN
} from '../actions/constants';

const initialState = {
  user: {},
  isLoggedIn: false,
  address: [],
  token: ''
};

const user = localStorage.getItem('user');
const userState = JSON.parse(user);

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {...state, user: action.user}
    case UPDATE_USER:
      return {...state, user: userState}  
    case DELETE_USER:
      return {...state, user: action.payload}
    case LOGIN_SUCCESS: 
      return {...state, isLoggedIn: action.isLoggedIn}
    case LOGIN_FAIL: 
      return {...state, isLoggedIn: action.isLoggedIn }
    case LOG_IN:
      return {...state, user: action.user}
    case LOG_OUT: 
      return {...state, isLoggedIn: action.logout, user: {}}
    case UPDATE_ADDRESS: 
      return {...state, address: action.address, user: {}}
    case TOKEN_EXPIRED_NOTIFY: 
      return {...state, message: action.message, token: action.token}
    case CREATE_TOKEN:
      return {...state, token: action.token}
    case GET_ADDRESS:
      return {...state, address: action.address}
  }
  return state;
}

export default userReducer;