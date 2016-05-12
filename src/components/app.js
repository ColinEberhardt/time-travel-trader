import React from 'react'
import { connect } from 'react-redux'

import Order from './order'
import Login from './login'
import Initialising from './initialising'

const mapStateToProps = (state) => ({ lifecycle: state.lifecycle })

const componentForLifecycle = (lifecycle) => {
  switch(lifecycle) {
    case 'LOGIN':
      return <Login/>
    case 'INITIALISING':
      return <Initialising/>
    case 'ORDER_ENTRY':
      return <Order/>
  }
}

const CENTRED_STYLE = {
  marginLeft: 'auto',
  marginRight: 'auto'
}

const CONTAINER_OFFSET_STYLE = {
  paddingTop: '70px'
}

const App = (props) =>
  <div>
    <nav className='navbar navbar-inverse navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <span className='navbar-brand'>Time Travel Trader - Colin Eberhardt</span>
        </div>
      </div>
    </nav>
    <div style={Object.assign({width: 500}, CONTAINER_OFFSET_STYLE, CENTRED_STYLE)}>
      {componentForLifecycle(props.lifecycle)}
    </div>
  </div>

export default connect(mapStateToProps)(App)
