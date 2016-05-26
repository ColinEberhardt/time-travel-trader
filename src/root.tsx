import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import * as devTools from 'remote-redux-devtools'

import App from './component/app'
import reducer from './store/reducer'
import loginMiddleware from './store/middleware/login'
import initialisationMiddleware from './store/middleware/initialisation'

const devToolsMiddleware = devTools({
  name: 'FakeTrader',
  realtime: true,
  hostname: 'localhost',
  port: 8000
})

const store = createStore(reducer, compose(
    applyMiddleware(
      loginMiddleware,
      initialisationMiddleware
    ), devToolsMiddleware
  )
)

// Enable HMR of reducers
// TODO: Find a better way of doing this with TypeScript!
declare const module: any
declare const require: any
if (module.hot) {
  module.hot.accept('./store/reducer', () => {
    /* tslint:disable */
    const nextRootReducer = require('./store/reducer').default
    /* tslint:enable */
    store.replaceReducer(nextRootReducer)
  })
}


// root component cannot be stateless functional components
// see: https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
// #the-following-modules-couldnt-be-hot-updated-they-would-need-a-full-reload
export default class Root extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
