import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from './devtools';
import { Provider } from 'react-redux';
import TradeTicket from './trade-ticket';
import createFxTradeStore from './trade-store';

let store = createFxTradeStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TradeTicket />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));
