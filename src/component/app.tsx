/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { connect, MapStateToProps } from 'react-redux'

import Login from './login'
import Initialisation from './initialisation'
import Order from './order'
import * as LifecycleReducer from '../store/reducer/lifecycle'
import * as Reducer from '../store/reducer'

interface StateProperties {
  lifecycle: LifecycleReducer.Lifecycle
}

interface DispatchProperties {}

type Properties = StateProperties & DispatchProperties

const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => ({
  lifecycle: state.lifecycle
})

const componentForLifecycle = (state: LifecycleReducer.Lifecycle) => {
  switch (state) {
    case LifecycleReducer.Lifecycle.Login:
      return <Login/>
    case LifecycleReducer.Lifecycle.Initialising:
      return <Initialisation/>
    case LifecycleReducer.Lifecycle.OrderEntry:
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

const App = (props: Properties) =>
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
