/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { connect, MapStateToProps } from 'react-redux'

import * as InitialisationReducer from '../store/reducer/initialisation'
import * as Reducer from './../store/reducer'

interface StateProperties {
  initialisation: InitialisationReducer.State
}

interface DispatchProperties {}

type Properties = StateProperties & DispatchProperties

const mapStateToProps: MapStateToProps<StateProperties, {}> = (state: Reducer.State) => ({
  initialisation: state.initialisation
})

const Style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 60
  }
}

const Initialising = (props: Properties) =>
  <div style={Style.container}>
    <h2>Loading ...</h2>
    <div>
      {props.initialisation.progress}%
    </div>
    <div>
      {props.initialisation.message}
    </div>
  </div>

export default connect(mapStateToProps)(Initialising)
