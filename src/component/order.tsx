/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

import * as OrderReducer from '../store/reducer/order'
import PriceTile from './price-tile'

interface StateProperties {
  order: OrderReducer.State
}

export interface DispatchProperties {
  amountUpdated: Function
  currencyChanged: Function
  orderTypeChanged: Function
  amountBlurred: Function
  close: Function
}

type Properties = StateProperties & DispatchProperties


// <Price price={props.order.bidAsk[0]} side='Bid'/>

// <Price price={props.order.bidAsk[0]} side='Bid'/>

// const Price = props =>
//   <div className='panel panel-default'>
//     <div className='panel-body' style={PRICE_CONTAINER_STYLE}>
//       <div style={PRICE_STYLE}>{props.price}</div>
//       <div>{props.side}</div>
//     </div>
//   </div>

const TICKET_WIDTH = 250
const TICKET_PADDING = 10
const LIGHT_GRAY = '#9c9ea2'
const BORDER_WIDTH = 1
const AMOUNT_CONTAINER_HEIGHT = 20

const Style = {
  ticket: {
    width: TICKET_WIDTH,
    display: 'inline-block',
    margin: 10,
    backgroundColor: '#0d1221'
  },
  title: {
    color: '#86e2fb',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: LIGHT_GRAY,
    cursor: 'pointer',
    fontSize: 20,
    position: 'absolute',
    width: 20,
    height: 20,
    lineHeight: '15px',
    right: 0,
    top: 0
  },
  priceTileContainer: {
    display: 'flex',
    marginBottom: 10
  },
  amountContainer: {
    position: 'relative',
    height: AMOUNT_CONTAINER_HEIGHT
  },
  amount: {
    backgroundColor: '#131f37',
    border: BORDER_WIDTH + 'px solid ' + LIGHT_GRAY,
    borderRadius: 5,
    color: LIGHT_GRAY,
    fontSize: 11,
    width: TICKET_WIDTH - TICKET_PADDING * 2 - BORDER_WIDTH,
    height: AMOUNT_CONTAINER_HEIGHT,
    margin: 0,
    padding: 0
  },
  amountCurrency: {
    fontSize: 11,
    position: 'absolute',
    top: 0,
    right: 3,
    color: LIGHT_GRAY,
    height: AMOUNT_CONTAINER_HEIGHT + BORDER_WIDTH * 2 + 'px',
    lineHeight: AMOUNT_CONTAINER_HEIGHT + BORDER_WIDTH * 2 + 'px'
  },
  ticketContents: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10
  },
  ticketHeading: {
    position: 'relative'
  }
}

export const Order = (props: Properties) =>
  <div style={Style.ticket}>
    <div style={Style.ticketHeading}>
      <div style={Style.closeButton} onClick={props.close}>&times;</div>
      <h3 style={Style.title}>{props.order.baseCurrency} | {props.order.quoteCurrency}</h3>
    </div>
    <div style={Style.ticketContents}>
      <div style={Style.priceTileContainer}>
        <PriceTile price={props.order.bidAsk[0]} side='BUY'/>
        <PriceTile price={props.order.bidAsk[1]} side='SELL'/>
      </div>
      <div style={Style.amountContainer}>
        <div style={Style.amountCurrency}>{props.order.baseCurrency}</div>
        <input style={Style.amount} value={props.order.amountFormatted}
          onChange={props.amountUpdated} onBlur={props.amountBlurred} />
      </div>
    </div>
  </div>
