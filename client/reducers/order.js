import { BUILD_ORDER } from '../actions/constants';

const initialState = {
  order: [],
  date: '',
  total: 0
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUILD_ORDER: 
      return {...state, order: action.order, date: new Date.getTime(), total: action.total}
  }
  return state;
}

export default orderReducer;