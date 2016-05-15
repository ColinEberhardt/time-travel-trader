/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

interface FormGroupProperties {
  title: string
  children?: any
}

const FormGroup = (props: FormGroupProperties) =>
  <div className='form-group'>
    <label className='col-sm-3 control-label'>{props.title}</label>
    <div className='col-sm-9'>
      {props.children}
    </div>
  </div>

export default FormGroup
