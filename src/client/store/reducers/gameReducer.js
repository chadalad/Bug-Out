import { types } from '../actions';

const initialGameState = {
  rounds: '',
  currentId: '',
  players: [],
  active: false,
  private: true,
  prompt: '',
};

const gameReducer = (state = initialGameState, action) => {
  switch (action.type) {
    case types.NEW_GAME:
      return {
        ...state,
        id: action.payload.id,
        active: action.payload.active,
        code: action.payload.code,
        private: action.payload.private,
        rounds: action.payload.rounds,
        difficulty: action.payload.difficulty,
      };
    case types.GET_CURRENT_GAME:
      return {
        ...state,
        id: action.payload.game.id,
        active: action.payload.active,
        code: action.payload.game.code,
        private: action.payload.game.private,
        rounds: action.payload.game.rounds,
        difficulty: action.payload.game.difficulty,
        players: action.payload.players,
      };
    case types.SET_PROMPT:
      return {
        ...state,
        id: action.payload.game.id,
        active: action.payload.active,
        code: action.payload.game.code,
        private: action.payload.game.private,
        rounds: action.payload.game.rounds,
        difficulty: action.payload.game.difficulty,
        players: action.payload.players,
      };
    default: return state;
  }
};

export default gameReducer;
