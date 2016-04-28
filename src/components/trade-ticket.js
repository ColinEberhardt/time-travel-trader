import React from 'react'
import { connect } from 'react-redux'

import Errors from './errors'
import CurrencySelector from './currency-selector'

function mapStateToProps(state) {
  return { order: state.order }
}

function mapDispatchToProps(dispatch) {
  return {
    amountUpdated(event) {
      const amount = Number.parseFloat(event.target.value)
      if (amount) {
        dispatch({
          type: 'UPDATE_AMOUNT',
          amount: amount
        })
      }
    },
    currencyChanged(currency, side) {
      dispatch({
        type: 'CHANGE_CURRENCY',
        side,
        currency
      })
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

const TradeTicket = props =>
  <div>
    <h2>Fx Order Tickets</h2>
    <form className='form-horizontal'>
      <FormGroup title='Currency'>
        <div className='row'>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.baseCurrency} changed={currency => props.currencyChanged(currency, 'BASE')}/>
          </div>
          <div className='col-sm-6'>
            <CurrencySelector selected={props.quoteCurrency} changed={currency => props.currencyChanged(currency, 'QUOTE')}/>
          </div>
        </div>
      </FormGroup>
      <FormGroup title='Amount'>
        <input className='form-control' value={props.amount} onChange={props.amountUpdated}></input>
      </FormGroup>
    </form>
    {props.errors ? <Errors errors={props.errors}/> : ''}
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(TradeTicket)
