const initialState = {
  isRegistered: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "REGISTERED_SUCCESS": {
      return {...state, isRegistered: true }
    }

    case "REGISTERED_FAIL": {
      return {...state, isRegistered: false }
    }
  }

  return state;
}