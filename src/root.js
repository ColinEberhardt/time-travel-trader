import React from 'react';
import DevTools from './devtools';
import { Provider } from 'react-redux';
import TradeTicket from './trade-ticket';

import { createStore } from 'redux';
import reducer from './reducer';

const defaultState = {
  currency: 'EURUSD',
  amount: 1000,
  error: ''
};

const store = createStore(reducer, defaultState, DevTools.instrument())

const Root = () =>
  <Provider store={store}>
    <div>
      <TradeTicket />
      <DevTools />
    </div>
  </Provider>;

export default Root;
