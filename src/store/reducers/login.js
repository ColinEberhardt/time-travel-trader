const login =  (state = {
  username: '',
  password: '',
  usernameValid: false,
  passwordValid: false,
  loginEnabled: false,
  loginInProgress: false
}, action) => {

  switch(action.type) {
    case 'USERNAME_CHANGED':
      state = Object.assign({}, state, {
        username: action.username,
        usernameValid: action.username.length > 0
      })
      break
    case 'PASSWORD_CHANGED':
      state = Object.assign({}, state, {
        password: action.password,
        passwordValid: action.password.length > 0
      })
      break
    case 'LOGIN':
      state = Object.assign({}, state, { loginInProgress: true })
      break
  }

  state = Object.assign({}, state, {
    loginEnabled: state.passwordValid && state.usernameValid
  })
  return state
}

export default login
