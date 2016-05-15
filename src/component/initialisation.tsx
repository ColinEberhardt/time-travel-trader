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

const Initialising = (props: Properties) =>
  <div>
    <h2>Loading ...</h2>
    <div className='progress'>
      <div className='progress-bar progress-bar-info progress-bar-striped'
            style={{'width': `${props.initialisation.progress}%`}}/>
    </div>
  </div>

export default connect(mapStateToProps)(Initialising)
