const initialState = {
  isLoggedIn: false
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":  
    state = {
      ...state,
      isLoggedIn: action.payload
    }

    case "LOGIN_FAIL": {
      return {...state, isLoggedIn: action.payload }
    }
  }
  return state;
}

export default registerReducer;