/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

interface InputFieldProperties {
  isValid: boolean
  title: string
  value: string
  onChange: Function
  disabled: boolean
}

const InputField = (props: InputFieldProperties) =>
  <div className={props.isValid ? 'form-group' : 'form-group has-warning'}>
    <label>{props.title}</label>
    <input className='form-control' value={props.value}
      onChange={props.onChange} disabled={props.disabled}></input>
  </div>

export default InputField
