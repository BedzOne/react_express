import { 
  GET_USER, 
  UPDATE_USER, 
  DELETE_USER, 
  UPDATE_ADDRESS, 
  TOKEN_EXPIRED_NOTIFY,
  CHANGE_PASSWORD,
  GET_ADDRESS
} from './constants';

import axios from 'axios';

const savedUser = JSON.parse(localStorage.getItem('user'));

export const getUser = user => dispatch => {
  axios.get(`http://localhost:5000/user/${savedUser._id}`)
  .then(res => {
    dispatch({
      type: GET_USER,
      user: res.data
    })
  })
  .catch(err => console.log(err))
};

export const updateUser = user => {
  return {
    type: UPDATE_USER,
    user: user
  };
};

export const deleteUser = user => {
  return {
    type: DELETE_USER,
    payload: user
  };
};

export const updateAddress = address => {
  return {
    type: UPDATE_ADDRESS, 
    address
  };
};

export const changePassword = password => {
  return {
    type: CHANGE_PASSWORD,
    password
  }
};


export const getAddress = address => dispatch => {
  axios.get(`http://localhost:5000/user/${savedUser._id}`)
  .then(res => {
    dispatch({
      type: GET_ADDRESS,
      address: res.data.addressDelivery
    })
  })
  .catch(err => console.log(err))
}

export const tokenExpired = (message,token) => ({
    type: TOKEN_EXPIRED_NOTIFY,
    message,
    token
});