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

const TradeTicket = props =>
  <div className='row'>
    <div className='col-md-4 col-md-offset-4'>
      <h2>Fx Order Ticket</h2>
      <form className='form-horizontal'>
        <div className='form-group'>
          <label className='col-sm-2 control-label'>Currency</label>
          <div className='col-sm-10'>
            <div className='row'>
              <div className='col-sm-6'>
                <CurrencySelector selected={props.baseCurrency} changed={currency => props.currencyChanged(currency, 'BASE')}/>
              </div>
              <div className='col-sm-6'>
                <CurrencySelector selected={props.quoteCurrency} changed={currency => props.currencyChanged(currency, 'QUOTE')}/>
              </div>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label className='col-sm-2 control-label'>Amount</label>
          <div className='col-sm-10'>
            <input className='form-control' value={props.amount} onChange={props.amountUpdated}></input>
          </div>
        </div>
      </form>
      {props.errors ? <Errors errors={props.errors}/> : ''}
    </div>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(TradeTicket)
