/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { Dispatch } from 'redux'
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import * as Radium from 'radium'

import Constants from './constants'
import * as LoginReducer from './../store/reducer/login'
import * as Reducer from './../store/reducer'

interface StateProperties {
  state: LoginReducer.State,
}

interface DispatchProperties {
  login: Function,
  usernameChanged: Function,
  passwordChanged: Function
}

type Properties = StateProperties & DispatchProperties

const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => {
  return {
    state: state.login
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProperties, {}> = (dispatch: Dispatch) => {
  return {
    login(event: KeyboardEvent) {
      event.preventDefault()
      dispatch(LoginReducer.login())
    },
    usernameChanged(event: KeyboardEvent) {
      const target = event.target as HTMLInputElement
      const username = target.value
      dispatch(LoginReducer.usernameChanged(username))
    },
    passwordChanged(event: KeyboardEvent) {
      const target = event.target as HTMLInputElement
      const password = target.value
      dispatch(LoginReducer.passwordChanged(password))
    }
  }
}

const INPUT_WIDTH = 350

const Style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 60
  },
  input: {
    fontSize: 30,
    display: 'block',
    border: 0,
    borderLeftColor: 'white',
    borderLeftWidth: 10,
    borderLeftStyle: 'solid',
    width: INPUT_WIDTH,
    padding: 10,
    backgroundColor: 'white'
  },
  underline: {
    marginBottom: 1
  },
  invalid: {
    borderLeftColor: Constants.color.red
  },
  button: {
    width: '100%',
    margin: 0,
    fontSize: 30,
    backgroundColor: Constants.color.neonBlue,
    color: Constants.color.background,
    border: 0,
    padding: 5,
    marginTop: 30,
    ':hover': {
      backgroundColor: Constants.color.highlightNeonBlue
    }
  },
  disabledButton: {
    backgroundColor: Constants.color.lightGray,
    ':hover': {
      backgroundColor: Constants.color.lightGray
    }
  }
}

const isDisabled = (props: Properties) => !props.state.loginEnabled || props.state.loginInProgress;

const Login = (props: Properties) =>
  <div style={Style.container}>
    <form>
      <input
        style={[
          Style.input,
          props.state.usernameValid ? {} : Style.invalid,
          Style.underline
        ]}
        value={props.state.username}
        onChange={props.usernameChanged}
        disabled={props.state.loginInProgress}
        placeholder='username'>
      </input>
      <input
        style={[
          Style.input,
          props.state.passwordValid ? {} : Style.invalid
        ]}
        value={props.state.password}
        onChange={props.passwordChanged}
        disabled={props.state.loginInProgress}
        isValid={props.state.passwordValid}
        placeholder='password'>
      </input>
      <button type='submit'
        style={isDisabled(props) ? [Style.button, Style.disabledButton] : Style.button}
        onClick={props.login}
        disabled={isDisabled(props)}>
        login
      </button>
      <p>{props.state.failureMessage}</p>
    </form>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Login))
