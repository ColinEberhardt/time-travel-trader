import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    state: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login(event) {
      event.preventDefault()
      dispatch({
        type: 'LOGIN'
      })
    },
    login2(event) {
      event.preventDefault()
      dispatch({
        type: 'LIFECYCLE_TRANSITION',
        lifecycle: 'INITIALISING'
      })
      // TODO: use thunk middleware?
      let progress = 0
      var interval = setInterval(() =>  {
        progress += 20
        if (progress > 100) {
          dispatch({
            type: 'LIFECYCLE_TRANSITION',
            lifecycle: 'ORDER_ENTRY'
          })
          clearInterval(interval)
        } else {
          dispatch({
            type: 'INITIALIZATION_PROGRESS_UPDATE',
            progress
          })
        }
      }, 1000)
    },
    usernameChanged(event) {
      const username = event.target.value
      dispatch({
        type: 'USERNAME_CHANGED',
        username
      })
    },
    passwordChanged(event) {
      const password = event.target.value
      dispatch({
        type: 'PASSWORD_CHANGED',
        password
      })
    }
  }
}

const InputField = props =>
  <div className={props.isValid ? 'form-group' : 'form-group has-warning'}>
    <label>{props.title}</label>
    <input className='form-control' value={props.value}
      onChange={props.onChange} disabled={props.disabled}></input>
  </div>

const Login = props =>
  <div>
    <h2>Client Login</h2>
    <form>
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
