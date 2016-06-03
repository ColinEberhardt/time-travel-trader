import * as Redux from 'redux'

import * as LoginReducer from '../reducer/login'
import * as LifecycleReducer from '../reducer/lifecycle'

interface Action {
  type: string
}

const loginMiddleware: Redux.Middleware = ({ getState, dispatch }) =>
 (next: any) =>
    (action: Action) => {

      const nextMiddleware = next(action)
      const state = getState()

      if (action.type === LoginReducer.LOGIN) {
        setTimeout(() => {
            if (state.login.username === 'Colin' && state.login.password === 'Password') {
              dispatch(LifecycleReducer.transition(LifecycleReducer.State.Initialising))
            } else {
              dispatch(LoginReducer.loginFailed('login failed, please try again'))
            }
          }, 1000)
      }
      return nextMiddleware
    }

export default loginMiddleware
