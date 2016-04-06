import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      deleteItem(id) {
        dispatch({
          type: 'DELETE_ITEM',
          id
        });
      },
      addItem() {
        dispatch({
          type: 'ADD'
        });
      },
      updateNewItem(event) {
        dispatch({
          type: 'UPDATE_NEW_ITEM',
          text: event.target.value
        });
      }
    }
  }
}

const TodoItem = props =>
  <div>
    {props.text}
    <button onClick={props.delete.bind(this, props.id)}>delete</button>
  </div>

const TodoList = ({state, actions}) =>
  <div>
    <h1>Todo List FTW!!</h1>
    <input value={state.newItem} onChange={actions.updateNewItem}></input>
    <button onClick={actions.addItem}>add</button>
    <ul>{state.todos.map(d =>
        <li><TodoItem text={d.text} delete={actions.deleteItem} id={d.id}/></li>
    )}</ul>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
