const initialState = {
  userName: 'Andrew',
  email: 'abedziak@hotmail.com',
  password: '123',
  confirmPassword: '123',
  isRegistered: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TYPE_USERNAME": {
      return {...state, userName: action.payload }
    }

    case "TYPE_EMAIL": {
      return {...state, email: action.payload }
    }

    case "TYPE_PASSWORD": {
      return {...state, password: action.payload }
    }

    case "CONFIRM_PASSWORD": {
      return {...state, confirmPassword: action.payload }
    }

    case "isRegistered": {
      return {...state, isRegistered: true }
    }
  }

  return state;
}