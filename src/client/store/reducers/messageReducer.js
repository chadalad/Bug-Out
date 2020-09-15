import { types } from '../actions';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messageReducer;
