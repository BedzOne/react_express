import { REGISTER_SUCCESS, REGISTER_FAIL } from './constants';

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS, 
    payload: true
  };
}

export function registerFail() {
  return {
    type: REGISTER_FAIL,
    payload: false
  };
}