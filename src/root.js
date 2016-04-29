import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import DevTools from './devtools'
import App from './components/app'
import reducer from './store/reducer'

const store = createStore(reducer,
  compose(
    applyMiddleware(
      require('./store/middleware/login').default
    ),
    DevTools.instrument()
  )
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./store/reducer', () => {
    const nextRootReducer = require('./store/reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

const Root = () =>
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>

export default Root
