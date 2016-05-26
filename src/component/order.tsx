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

const TICKET_WIDTH = 320
const TICKET_HEIGHT = 283
const TICKET_PADDING = 10
const TICKET_HEADING_HEIGHT = '52px'
const LIGHT_GRAY = '#9c9ea2'
const BORDER_WIDTH = 2
const AMOUNT_CONTAINER_HEIGHT = 24
const AMOUNT_FONT_SIZE = 16

const Style = {
  ticket: {
    width: TICKET_WIDTH,
    height: TICKET_HEIGHT,
    margin: 13,
    display: 'inline-block',
    backgroundColor: '#1b222f'
  },
  priceTileContainer: {
    display: 'flex',
    marginBottom: 20
  },
  amountContainer: {
    position: 'relative',
    height: AMOUNT_CONTAINER_HEIGHT
  },
  amount: {
    backgroundColor: 'transparent',
    border: BORDER_WIDTH + 'px solid ' + LIGHT_GRAY,
    borderRadius: 3,
    color: LIGHT_GRAY,
    fontSize: AMOUNT_FONT_SIZE,
    width: 230,
    height: AMOUNT_CONTAINER_HEIGHT,
    margin: 0,
    padding: 0
  },
  amountCurrency: {
    fontSize: AMOUNT_FONT_SIZE,
    position: 'absolute',
    top: 0,
    right: 3,
    color: LIGHT_GRAY,
    height: AMOUNT_CONTAINER_HEIGHT + BORDER_WIDTH * 2 + 'px',
    borderLeft: '2px solid ' + LIGHT_GRAY,
    padding: '0 10px',
    lineHeight: AMOUNT_CONTAINER_HEIGHT + BORDER_WIDTH * 2 + 'px'
  },
  ticketContents: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10
  },
  ticketHeading: {
    position: 'relative',
    height: TICKET_HEADING_HEIGHT
  },
  title: {
    color: '#86e2fb',
    fontSize: 24,
    lineHeight: TICKET_HEADING_HEIGHT,
    margin: 0,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: '#72767e',
    height: TICKET_HEADING_HEIGHT,
    cursor: 'pointer',
    fontSize: 40,
    position: 'absolute',
    lineHeight: TICKET_HEADING_HEIGHT,
    right: 10,
    top: 0
  },
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
