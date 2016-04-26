import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import DevTools from './devtools'
import App from './components/app'
import reducer from './store/reducer'
import initialState from './store/initial-state'

const store = createStore(reducer, {}, DevTools.instrument())

const Root = () =>
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>

export default Root
