import React from 'react'
import { connect } from 'react-redux'

import TradeTicket from './trade-ticket'
import Login from './login'
import Initialising from './initialising'

const mapStateToProps = (state) => {
  return { state }
}

const componentForLifecycle = (lifecycle) => {
  switch(lifecycle) {
    case 'LOGIN':
      return <Login/>
    case 'INITIALISING':
      return <Initialising/>
    case 'LOGGED_IN':
      return <TradeTicket/>
  }
}

const App = (props) =>
  <div>
    <h2>Colins trading app</h2>
    {componentForLifecycle(props.state.lifecycle)}
  </div>

export default connect(mapStateToProps)(App)
