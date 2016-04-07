import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    credentials: state.credentials
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login() {
      dispatch({
        type: 'LIFECYCLE_TRANSITION',
        lifecycle: 'INITIALISING'
      })
      // TODO: use thunk middleware?
      setTimeout(() => dispatch({
        type: 'LIFECYCLE_TRANSITION',
        lifecycle: 'LOGGED_IN'
      }), 5000)
    }
  }
}

const Login = props =>
  <div>
    <h2>Login!!!!</h2>
    Username: <input value={props.credentials.username} ></input><br/>
    Password: <input value={props.credentials.password} ></input><br/>
    <button onClick={props.login}>login</button>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Login)
