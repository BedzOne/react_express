import { 
  GET_USER, 
  UPDATE_USER, 
  DELETE_USER,
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOG_OUT,
  UPDATE_ADDRESS,
  TOKEN_EXPIRED_NOTIFY
} from '../actions/constants';

const initialState = {
  user: {},
  isLoggedIn: false,
  address: {}
};

const user = localStorage.getItem('user');
const userState = JSON.parse(user);

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {...state, user: action.payload}
    case UPDATE_USER:
      return {...state, user: userState}  
    case DELETE_USER:
      return {...state, user: action.payload}
    case LOGIN_SUCCESS: 
      return {...state, isLoggedIn: action.login}
    case LOGIN_FAIL: 
      return {...state, isLoggedIn: action.logFail }
    case LOG_OUT: 
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      return {...state, isLoggedIn: action.logout, user: {}}
    case UPDATE_ADDRESS: 
      return {...state, address: action.address, user: {}}
    // case CHANGE_PASSWORD:
    //   return {...state, password: action.password}
    case TOKEN_EXPIRED_NOTIFY: 
      return {...state, message: action.message, token: action.token}
  }
  return state;
}

export default userReducer;