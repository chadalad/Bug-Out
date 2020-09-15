import { types } from '../actions';

const initialState = {
  playerName: null,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default inputReducer;
