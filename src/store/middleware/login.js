import * as loginAction from '../reducers/login'
import * as lifecycle from '../reducers/lifecycle'

const loginMiddleware = ({ getState, dispatch }) =>
 (next) =>
    (action) => {

      const nextMiddleware = next(action)
      const state = getState()

      if (action.type === loginAction.LOGIN) {
        setTimeout(() => {
          if (state.login.username === 'Colin' && state.login.password === 'Password') {
            dispatch(lifecycle.transition(lifecycle.STATE.INITIALISING))
          } else {
            dispatch(loginAction.loginFailed('login failed, please try again'))
          }
        }, 1000)
      }
      return nextMiddleware
    }

export default loginMiddleware
