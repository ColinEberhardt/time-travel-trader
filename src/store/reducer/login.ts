import merge from './merge'

export const USERNAME_CHANGED = 'login/USERNAME_CHANGED'
export const PASSWORD_CHANGED = 'login/PASSWORD_CHANGED'
export const LOGIN = 'login/LOGIN'
export const LOGIN_FAILED = 'login/LOGIN_FAILED'

interface Action {
  type: string
  message?: string
  username?: string
  password?: string
}

interface ActionCreator extends Function {
  (...args: any[]): Action
}

export interface State {
  username: string
  password: string
  usernameValid: boolean
  passwordValid: boolean
  loginEnabled: boolean
  loginInProgress: boolean
  failureMessage: string
}

interface Reducer extends Function {
  (state: State, action: Action): State
}

export const loginFailed: ActionCreator = (message: string) => ({
  type: LOGIN_FAILED,
  message
})

export const login: ActionCreator  = () => ({
  type: LOGIN
})

export const usernameChanged: ActionCreator  = (username: string) => ({
  type: USERNAME_CHANGED,
  username
})

export const passwordChanged: ActionCreator = (password: string) => ({
  type: PASSWORD_CHANGED,
  password
})

const INITIAL_STATE: State = {
  username: '',
  password: '',
  usernameValid: false,
  passwordValid: false,
  loginEnabled: false,
  loginInProgress: false,
  failureMessage: ''
}

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      state = merge(state, {
        username: action.username,
        usernameValid: action.username.length > 0,
        failureMessage: ''
      })
      break
    case PASSWORD_CHANGED:
      state = merge(state, {
        password: action.password,
        passwordValid: action.password.length > 0,
        failureMessage: ''
      })
      break
    case LOGIN:
      state = merge(state, { loginInProgress: true })
      break
    case LOGIN_FAILED:
      state = merge(state, {
        loginInProgress: false,
        failureMessage: action.message
      })
      break
  }

  state = merge(state, {
    loginEnabled: state.passwordValid && state.usernameValid
  })
  return state
}
