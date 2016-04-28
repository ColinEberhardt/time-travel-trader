import React from 'react'
import { connect } from 'react-redux'

import TradeTicket from './trade-ticket'
import Login from './login'
import Initialising from './initialising'

const mapStateToProps = (state) => ({ lifecycle: state.lifecycle })

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

const centredStyle = {
  marginLeft: 'auto',
  marginRight: 'auto'
}

const App = (props) =>
  <div className='container-fixed'>
    <nav className='navbar navbar-inverse'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>Fake Trader - Colin Eberhardt</a>
        </div>
      </div>
    </nav>
    <div style={Object.assign({width: 500}, centredStyle)}>
      {componentForLifecycle(props.lifecycle)}
    </div>
  </div>

export default connect(mapStateToProps)(App)
