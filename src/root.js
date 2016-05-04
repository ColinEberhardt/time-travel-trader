import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'

import App from './components/app'
import reducer from './store/reducer'

const store = createStore(reducer,
  compose(
    applyMiddleware(
      require('./store/middleware/login').default,
      require('./store/middleware/initialisation').default
    ),
    devTools({
      name: 'FakeTrader', realtime: true,
      hostname: 'localhost', port: 8000
    })
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
    </div>
  </Provider>

export default Root
