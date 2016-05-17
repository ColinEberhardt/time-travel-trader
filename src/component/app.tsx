/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { connect, MapStateToProps } from 'react-redux'

import Login from './login'
import Initialisation from './initialisation'
import Orders from './orders'
import * as LifecycleReducer from '../store/reducer/lifecycle'
import * as Reducer from '../store/reducer'

interface StateProperties {
  lifecycle: LifecycleReducer.State
}

interface DispatchProperties {}

type Properties = StateProperties & DispatchProperties

const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => ({
  lifecycle: state.lifecycle
})

const componentForLifecycle = (state: LifecycleReducer.State) => {
  switch (state) {
    case LifecycleReducer.State.Login:
      return <Login/>
    case LifecycleReducer.State.Initialising:
      return <Initialisation/>
    case LifecycleReducer.State.OrderEntry:
      return <Orders/>
  }
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
    <div style={CONTAINER_OFFSET_STYLE}>
      {componentForLifecycle(props.lifecycle)}
    </div>
  </div>

export default connect(mapStateToProps)(App)
