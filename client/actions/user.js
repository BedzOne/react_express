import { GET_USER, UPDATE_USER, DELETE_USER } from './constants';

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