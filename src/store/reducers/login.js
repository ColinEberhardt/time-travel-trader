export const USERNAME_CHANGED = 'login/USERNAME_CHANGED'
export const PASSWORD_CHANGED = 'login/PASSWORD_CHANGED'
export const LOGIN = 'login/LOGIN'
export const LOGIN_FAILED = 'login/LOGIN_FAILED'

export const loginFailed = message => ({
  type: LOGIN_FAILED,
  message
})

export const login = () => ({
  type: LOGIN
})

export const usernameChanged = username => ({
  type: USERNAME_CHANGED,
  username
})

export const passwordChanged = password => ({
  type: PASSWORD_CHANGED,
  password
})

const reducer =  (state = {
  username: '',
  password: '',
  usernameValid: false,
  passwordValid: false,
  loginEnabled: false,
  loginInProgress: false,
  failureMessage: ''
}, action) => {

  switch(action.type) {
    case USERNAME_CHANGED:
      state = Object.assign({}, state, {
        username: action.username,
        usernameValid: action.username.length > 0,
        failureMessage: ''
      })
      break
    case PASSWORD_CHANGED:
      state = Object.assign({}, state, {
        password: action.password,
        passwordValid: action.password.length > 0,
        failureMessage: ''
      })
      break
    case LOGIN:
      state = Object.assign({}, state, { loginInProgress: true })
      break
    case LOGIN_FAILED:
      state = Object.assign({}, state, {
        loginInProgress: false,
        failureMessage: action.message
      })
      break
  }

  state = Object.assign({}, state, {
    loginEnabled: state.passwordValid && state.usernameValid
  })
  return state
}

export default reducer
