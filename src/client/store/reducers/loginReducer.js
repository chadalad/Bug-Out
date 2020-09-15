import { types } from '../actions';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
  initialLoadingComplete: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        email: action.email,
        loggedIn: true,
        role: action.role,
      };
    case types.LOGOUT:
      return {
        ...state,
        email: null,
        loggedIn: false,
        name: '',
        role: 'guest',
      };
    case types.INITIAL_LOADING_COMPLETE:
      return {
        ...state,
        initialLoadingComplete: true,
      };
    case types.PLAY_AS_GUEST:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default loginReducer;
