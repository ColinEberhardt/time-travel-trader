/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

interface Properties {
  errors: string[]
}

const Style = {
  list: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
}

const ErrorPanel = (props: Properties) =>
  <ul style={Style.list}>
    {props.errors.map((error: string) => <li>{error}</li>)}
  </ul>

export default ErrorPanel;
