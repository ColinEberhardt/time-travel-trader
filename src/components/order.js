import React from 'react'
import { connect } from 'react-redux'

import Errors from './errors'
import CurrencySelector from './currency-selector'
import * as order from '../store/reducers/order'

function mapStateToProps(state) {
  return { order: state.order }
}

function mapDispatchToProps(dispatch) {
  return {
    amountUpdated(event) {
      const amount = Number.parseFloat(event.target.value)
      if (amount) {
        dispatch(order.changeAmount(amount))
      }
    },
    currencyChanged(currency, side) {
      dispatch(order.changeCurrency(currency, side))
    }
  }
}

const FormGroup = props =>
  <div className='form-group'>
    <label className='col-sm-2 control-label'>{props.title}</label>
    <div className='col-sm-10'>
      {props.children}
    </div>
  </div>

const Order = props =>
  <div>
    <h2>Fx Order Tickets</h2>
    <form className='form-horizontal'>
      <FormGroup title='Currency'>
        <div className='row'>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.order.baseCurrency}
              changed={currency => props.currencyChanged(currency, order.SIDE.BASE)}/>
          </div>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.order.quoteCurrency}
              changed={currency => props.currencyChanged(currency, order.SIDE.QUOTE)}/>
          </div>
        </div>
      </FormGroup>
      <FormGroup title='Amount'>
        <input className='form-control' value={props.order.amount} onChange={props.amountUpdated}></input>
      </FormGroup>
    </form>
    {props.order.errors.length ? <Errors errors={props.order.errors}/> : ''}
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(Order)
