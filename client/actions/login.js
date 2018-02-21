import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from './constants';

export function loginSuccess(login) {
  return {
    type: LOGIN_SUCCESS,
    payload: login,
  };
}

export function loginFail(log) {
  return {
    type: LOGIN_FAIL,
    payload: log
  };
}

export function logOut(log, user) {
  return {
    type: LOG_OUT,
    payload: log,
    user: user
  };
}