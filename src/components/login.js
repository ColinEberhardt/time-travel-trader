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

const Login = props =>
  <div className='row'>
    <div className='col-md-4 col-md-offset-4'>
      <h2>User Login</h2>
      <form>
        <div className='form-group'>
          <label>Username</label>
          <input className='form-control' defaultValue={props.credentials.username}></input>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input className='form-control' defaultValue={props.credentials.password}></input>
        </div>
        <button type='submit' className='btn btn-default' onClick={props.login}>login</button>
      </form>
    </div>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Login)
