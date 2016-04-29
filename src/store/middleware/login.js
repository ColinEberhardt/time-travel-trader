export default function createLogger({ getState, dispatch }) {
  return (next) =>
    (action) => {

      const returnValue = next(action)
      const state = getState()

      if (action.type === 'LOGIN') {
        setTimeout(() => {
          if (state.login.username === 'Colin' && state.login.password === 'Password') {
            dispatch({
              type: 'LIFECYCLE_TRANSITION',
              lifecycle: 'INITIALISING'
            })
          } else {
            dispatch({
              type: 'LOGIN_FAILED'
            })
          }
        }, 1000)
      }
      return state
    }
}
