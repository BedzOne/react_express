import { GET_USER, UPDATE_USER, DELETE_USER } from '../actions/constants';

const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {...state, user: action.user}
    case UPDATE_USER:
      const user = localStorage.getItem('user');
      const userState = JSON.parse(user);
      return {...state, user: userState}  
    case DELETE_USER:
      return {...state, user: action.payload}
  }
  return state;
}

export default userReducer;