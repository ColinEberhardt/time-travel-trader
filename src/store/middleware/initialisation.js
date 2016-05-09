import * as login from '../reducers/login'
import * as lifecycle from '../reducers/lifecycle'
import * as initialisation from '../reducers/initialisation'

const statusMessage = progress => {
  if (progress < 40) {
    return 'Loading client configuration'
  } else if (progress < 70) {
    return 'Loading instrument database'
  } else {
    return 'Opening streaming connection'
  }
}

const initialisationMiddleware = ({ getState, dispatch }) =>
 (next) =>
    (action) => {

      const nextMiddleware = next(action)
      const state = getState()

      if (action.type === lifecycle.LIFECYCLE_TRANSITION &&
        action.lifecycle === lifecycle.STATE.INITIALISING) {
        let progress = 0
        var interval = setInterval(() =>  {
          progress += 20
          if (progress > 100) {
            dispatch(lifecycle.transition(lifecycle.STATE.ORDER_ENTRY))
            clearInterval(interval)
          } else {
            dispatch(initialisation.progressUpdate(progress, statusMessage(progress)))
          }
        }, 1000)
      }

      return nextMiddleware
    }

export default initialisationMiddleware
