/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { Dispatch } from 'redux'
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'

import * as LoginReducer from './../store/reducer/login'
import * as Reducer from './../store/reducer'
import InputField from './input-field'

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

const Login = (props: Properties) =>
  <div className='panel panel-info'>
    <div className='panel-heading'>Client Login</div>
    <form className='panel-body'>
      <InputField title='Username' value={props.state.username}
        onChange={props.usernameChanged} isValid={props.state.usernameValid}
        disabled={props.state.loginInProgress}/>
      <InputField title='Password' value={props.state.password}
        onChange={props.passwordChanged} isValid={props.state.passwordValid}
        disabled={props.state.loginInProgress}/>
      <button type='submit' className='btn btn-default' onClick={props.login}
        disabled={!props.state.loginEnabled || props.state.loginInProgress}>login</button>
      <p style={{display: 'inline', marginLeft: 10}}>{props.state.failureMessage}</p>
    </form>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Login)
