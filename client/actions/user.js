import { GET_USER, UPDATE_USER, DELETE_USER, UPDATE_ADDRESS, TOKEN_EXPIRED_NOTIFY } from './constants';

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user: user
  };
}

export function deleteUser(user) {
  return {
    type: DELETE_USER,
    payload: user
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS, 
    address
  };
}

export function tokenExpired(message,token) {
  return {
    type: TOKEN_EXPIRED_NOTIFY,
    message,
    token
  };
}