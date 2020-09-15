import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import loginReducer from './loginReducer';
import inputReducer from './inputReducer';
import messageReducer from './messageReducer';

const reducer = combineReducers({
  user: loginReducer,
  game: gameReducer,
  input: inputReducer,
  messages: messageReducer,
});

export default reducer;
