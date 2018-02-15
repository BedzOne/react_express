import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/constants';

const initialState = {
  isRegistered: false
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: { 
      return {...state, isRegistered: action.payload }
    }

    case REGISTER_FAIL: {
      return {...state, isRegistered: action.payload }
    }
  }
  return state;
}

export default registerReducer;