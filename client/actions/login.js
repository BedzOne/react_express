import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, LOG_IN, CREATE_TOKEN } from './constants';

export const logUserIn = user => dispatch => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch({
    type: LOG_IN,
    user: user
  }) 
};

export const createToken = token => dispatch => {
  localStorage.setItem('token', token);
  dispatch({
    type: CREATE_TOKEN,
    token
  });
};

export const loginSuccess = isLoggedIn => ({
  type: LOGIN_SUCCESS,
  isLoggedIn
})

export const loginFail = isLoggedIn => ({
  type: LOGIN_FAIL,
  isLoggedIn
});

export const logOut = (logout, user) => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  
  return {
    type: LOG_OUT,
    logout,
    user
  }
}