import { createStore } from 'redux';
import DevTools from './devtools';
import Todo from './todo';

const reducer = (state, action) => {
  // a dirty clone
  var clonedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'UPDATE_AMOUNT':
      clonedState.amount = action.amount;
      return clonedState;
    default:
      return state;
  }
}

const defaultState = {
  currency: 'EURUSD',
  amount: 1000
};

const createFxTradeStore = () => createStore(reducer, defaultState, DevTools.instrument())

export default createFxTradeStore;
