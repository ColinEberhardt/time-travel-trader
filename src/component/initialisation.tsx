/* tslint:disable */
import * as React from 'react'
/* tslint:enable */
import { connect, MapStateToProps } from 'react-redux'
import * as Radium from 'radium'

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

const spinKeyframes = Radium.keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(-360deg)'},
}, 'spin');

const Style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 60
  },
  spinnerSize: {
    width: 200,
    height: 200
  },
  spinner: {
    fontSize: 55,
    textAlign: 'center',
    lineHeight: '200px',
    backgroundImage: 'url(spinner.png)',
    animation: 'x 3s linear 0s infinite',
    animationName: spinKeyframes
  },
  progress:  {
    fontSize: 55,
    textAlign: 'center',
    lineHeight: '200px',
    position: 'absolute',
    top: 0,
    left: 0
  },
  spinnerContainer: {
    position: 'relative',
    marginBottom: 20,
  }
}

const Initialising = (props: Properties) =>
  <div style={Style.container}>
    <div style={[Style.spinnerContainer, Style.spinnerSize]}>
      <div style={[Style.spinner, Style.spinnerSize]}></div>
      <div style={[Style.progress, Style.spinnerSize]}>{props.initialisation.progress}%</div>
    </div>
    <div>
      {props.initialisation.message}
    </div>
  </div>

export default connect(mapStateToProps)(Radium(Initialising))
