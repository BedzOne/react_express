import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from './constants';

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
    payload: true
  };
}

export function loginFail() {
  return {
    type: LOGIN_FAIL,
    payload: false
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
    payload: false
  }
}