/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

interface Properties {
  errors: string[]
}

const ErrorPanel = (props: Properties) =>
  <ul>
    {props.errors.map((error: string) => <li>{error}</li>)}
  </ul>

export default ErrorPanel;
