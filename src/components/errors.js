import React from 'react'

const Errors = ({errors}) =>
  <div>
    <h3>Some bad things happened</h3>
    <ul>
      {errors.map(e => <li key={e}>{e}</li>)}
    </ul>
  </div>

export default Errors
