/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { connect, MapStateToProps, MapDispatchToPropsFunction } from 'react-redux'
import { Dispatch } from 'redux'

import Login from './login'
import Initialisation from './initialisation'
import Orders from './orders'
import * as LifecycleReducer from '../store/reducer/lifecycle'
import * as Reducer from '../store/reducer'
import { addTicket } from '../store/reducer/orders'

interface StateProperties {
  lifecycle: LifecycleReducer.State
}

interface DispatchProperties {
  addTicket: Function
}

type Properties = StateProperties & DispatchProperties

const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => ({
  lifecycle: state.lifecycle
})

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProperties, {}> = (dispatch: Dispatch) => {
  return {
    addTicket(event: KeyboardEvent) {
      if (event.charCode === 13) {
        const target = event.target as HTMLInputElement
        const fxCross = target.value
        dispatch(addTicket(fxCross))
        target.value = ''
      }
    },
    dispatch
  }
}

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

const NAV_HEIGHT = 78
const HEADING_FONT_SIZE = 30
const SEARCH_FONT_SIZE = 20
const CONTAINER_TOP_PADDING = 47
const CONTAINER_HORIZONTAL_PADDING = 13

const Style = {
  container: {
    paddingTop: NAV_HEIGHT + CONTAINER_TOP_PADDING,
    paddingLeft: CONTAINER_HORIZONTAL_PADDING,
    paddingRight: CONTAINER_HORIZONTAL_PADDING
  },
  headingNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: NAV_HEIGHT,
    position: 'fixed',
    backgroundColor: '#233d51',
    top: 0,
    left: 0,
    right: 0,
    paddingLeft: 60,
    backgroundImage: 'url(logo.png)',
    backgroundRepeat: 'no-repeat'
  },
  headingTitle: {
    margin: 0,
    paddingLeft: 20,
    fontSize: HEADING_FONT_SIZE,
    fontWeight: 'normal'
  },
  search: {
    marginRight: 20,
    fontSize: SEARCH_FONT_SIZE,
    backgroundColor: 'transparent',
    borderWidth: 3,
    color: 'white',
    borderColor: '#919ea8',
    width: 242
  }
}

const App = (props: Properties) =>
  <div>
    <nav style={Style.headingNav}>
      <h2 style={Style.headingTitle}>Time Travel Trader</h2>
      <input style={Style.search} onKeyPress={props.addTicket} placeholder='search'></input>
    </nav>
    <div style={Style.container}>
      {componentForLifecycle(props.lifecycle)}
    </div>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(App)
