import { ADD_FRUIT, ADD_FRUITS, SELL_FRUIT, SELL_OUT } from '../actions/fruitActions';

const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FRUIT:
      return [...state, action.fruit];
    case ADD_FRUITS:
      return [...state, ...action.fruits];
    case SELL_FRUIT:
      const idx = state.indexOf(action.fruit);
      if (idx !== -1) {
        // remove first instance of action.fruit
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      }
      return state; // if action.fruit is not in state, return previous state
    case SELL_OUT:
      return [];
    default:
      return state;
  }
};

export default fruitReducer;
