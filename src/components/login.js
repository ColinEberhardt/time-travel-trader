import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    credentials: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login(event) {
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
            lifecycle: 'TRADING'
          })
          clearInterval(interval)
        } else {
          dispatch({
            type: 'INITIALIZATION_PROGRESS_UPDATE',
            progress
          })
        }
      }, 1000)
    }
  }
}

const InputField = props =>
  <div className='form-group'>
    <label>{props.title}</label>
    <input className='form-control' defaultValue={props.defaultValue}></input>
  </div>

const Login = props =>
  <div>
    <h2>User Login</h2>
    <form>
      <InputField title='Username' defaultValue={props.credentials.username} />
      <InputField title='Password' defaultValue={props.credentials.password} />
      <button type='submit' className='btn btn-default' onClick={props.login}>login</button>
    </form>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Login)
