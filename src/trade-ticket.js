import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      amountUpdated(event) {
        const amount = Number.parseFloat(event.target.value);
        if (amount) {
          dispatch({
            type: 'UPDATE_AMOUNT',
            amount: amount
          });
        }
      }
    }
  }
}


const TradeTicket = props =>
  <div>
    <h2>Fx Order Ticket</h2>
    <div>Cross: {props.state.currency}</div>
    <input value={props.state.amount} onChange={props.actions.amountUpdated}></input>
  </div>;

export default connect(mapStateToProps, mapDispatchToProps)(TradeTicket);
