/* tslint:disable */
import * as React from 'react'
/* tslint:enable */

import * as Radium from 'radium'

import Constants from './constants'
import * as OrderReducer from '../store/reducer/order'
import PriceTile from './price-tile'
import ErrorPanel from './error-panel'

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
const TICKET_HEADING_HEIGHT = 52
const BORDER_WIDTH = 2
const AMOUNT_CONTAINER_HEIGHT = 24
const AMOUNT_FONT_SIZE = 16

const Style = {
  ticket: {
    width: TICKET_WIDTH,
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
    height: AMOUNT_CONTAINER_HEIGHT,
    marginBottom: 20
  },
  amount: {
    backgroundColor: 'transparent',
    border: BORDER_WIDTH + 'px solid ' + Constants.color.lightGray,
    borderRadius: 3,
    color: Constants.color.lightGray,
    fontSize: AMOUNT_FONT_SIZE,
    width: 230,
    height: AMOUNT_CONTAINER_HEIGHT,
    margin: 0,
    paddingLeft: 5
  },
  errorBorder: {
    borderColor: Constants.color.red
  },
  amountCurrency: {
    fontSize: AMOUNT_FONT_SIZE,
    position: 'absolute',
    top: 1,
    right: 3,
    color: Constants.color.lightGray,
    height: AMOUNT_CONTAINER_HEIGHT + BORDER_WIDTH * 2 + 'px',
    borderLeft: '2px solid ' + Constants.color.lightGray,
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
    color: Constants.color.neonBlue,
    fontSize: 24,
    lineHeight: TICKET_HEADING_HEIGHT + 'px',
    margin: 0,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: 'transparent',
    color: 'white',
    height: TICKET_HEADING_HEIGHT,
    cursor: 'pointer',
    fontSize: 40,
    position: 'absolute',
    opacity: 0.5,
    lineHeight: TICKET_HEADING_HEIGHT - 10 + 'px',
    right: 10,
    top: 0,
    ':hover': {
      opacity: 1
    }
  },
}

const OrderComponent = (props: Properties) =>
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
        <div style={props.order.errors.length > 0 ? [Style.amountCurrency, Style.errorBorder] : Style.amountCurrency}>
          {props.order.baseCurrency}
        </div>
        <input style={props.order.errors.length > 0 ? [Style.amount, Style.errorBorder] : Style.amount}
          value={props.order.amountFormatted}
          onChange={props.amountUpdated}
          onBlur={props.amountBlurred} />
      </div>
      <ErrorPanel errors={props.order.errors}/>
    </div>
  </div>

  export const Order = Radium(OrderComponent)
