import React from 'react'

const Errors = ({errors}) =>
  <div className='panel panel-danger'>
    <div className='panel-heading'>Validation Errors</div>
    <ul className='list-group panel-body'>
      {errors.map(e => <li className='list-group-item' key={e}>{e}</li>)}
    </ul>
  </div>

export default Errors
