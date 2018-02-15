import { REGISTER_SUCCESS, REGISTER_FAIL } from './constants';

export function registerSuccess(reg) {
  return {
    type: REGISTER_SUCCESS, 
    payload: reg
  };
}

export function registerFail(reg) {
  return {
    type: REGISTER_FAIL,
    payload: reg
  };
}