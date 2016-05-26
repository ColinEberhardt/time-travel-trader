/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { Dispatch } from 'redux'
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import * as Radium from 'radium'

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
    width: INPUT_WIDTH,
    padding: '5px 0'
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10
  },
  underline: {
    borderBottom: '1px solid  #010616'
  },
  button: {
    width: '100%',
    margin: 0,
    fontSize: 30,
    backgroundColor: '#86e2fb',
    color: '#010616',
    border: 0,
    padding: 5,
    marginTop: 30,
    ':hover': {
      backgroundColor: '#96f2fb'
    }
  },
  disabledButton: {
    backgroundColor: '#919ea8'
  }
}

const Login = (props: Properties) => {
  const disabled = !props.state.loginEnabled || props.state.loginInProgress;
  return <div style={Style.container}>
    <form>
      <div style={Style.inputContainer}>
        <input style={[Style.input, Style.underline]} value={props.state.username}
          onChange={props.usernameChanged} disabled={props.state.loginInProgress}
          placeholder='username'></input>
        <input style={Style.input} value={props.state.password}
          onChange={props.passwordChanged} disabled={props.state.loginInProgress}
          placeholder='password'></input>
      </div>
      <button type='submit'
        style={disabled ? [Style.button, Style.disabledButton] : Style.button}
        onClick={props.login}
        disabled={disabled}>login</button>
      <p style={{display: 'inline', marginLeft: 10}}>{props.state.failureMessage}</p>
    </form>
  </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(Radium(Login))
