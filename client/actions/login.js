import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from './constants';

export function loginSuccess(login) {
  return {
    type: LOGIN_SUCCESS,
    login,
  };
}

export function loginFail(logFail) {
  return {
    type: LOGIN_FAIL,
    logFail
  };
}

export function logOut(logout, user) {
  return {
    type: LOG_OUT,
    logout,
    user
  };
}