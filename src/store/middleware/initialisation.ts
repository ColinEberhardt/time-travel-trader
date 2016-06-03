import * as Redux from 'redux'

import * as LifecycleReducer from '../reducer/lifecycle'
import * as initialisation from '../reducer/initialisation'

const statusMessage = (progress: number): string => {
  if (progress < 40) {
    return 'Loading client configuration'
  } else if (progress < 70) {
    return 'Loading instrument database'
  } else {
    return 'Opening streaming connection'
  }
}

const initialisationMiddleware: Redux.Middleware = ({ dispatch }) =>
 (next: any) =>
    (action: LifecycleReducer.Action) => {

      const nextMiddleware = next(action)

      if (action.type === LifecycleReducer.LIFECYCLE_TRANSITION &&
        action.state === LifecycleReducer.State.Initialising) {
        let progress = 0
        const interval = setInterval(() =>  {
          progress += 20
          if (progress > 100) {
            dispatch(LifecycleReducer.transition(LifecycleReducer.State.OrderEntry))
            clearInterval(interval)
          } else {
            dispatch(initialisation.progressUpdate(progress, statusMessage(progress)))
          }
        }, 1000)
      }

      return nextMiddleware
    }

export default initialisationMiddleware
