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
    case 'TRADING':
      return <TradeTicket/>
  }
}

const App = (props) =>
  <div className='container-fixed'>
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>Fake Trader</a>
        </div>
      </div>
    </nav>
    {componentForLifecycle(props.state.lifecycle)}
  </div>

export default connect(mapStateToProps)(App)
