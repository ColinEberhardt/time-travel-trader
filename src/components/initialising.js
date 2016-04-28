import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    progress: state.initialisation.progress
  }
}

const Initialising = props =>
  <div>
    <h2>Loading ...</h2>
    <div className='progress'>
      <div className='progress-bar progress-bar-info progress-bar-striped'  style={{'width': `${props.progress}%`}}/>
    </div>
  </div>

export default connect(mapStateToProps)(Initialising)
