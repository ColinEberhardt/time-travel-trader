import React, { Component } from 'react';
import { createStore } from 'redux';


const reducer = (state, action) => {

  // a dirty clone
  var clonedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'ADD':
      clonedState.newItem = '';
      clonedState.todos.push(action.text);
      return clonedState;
    case 'UPDATE_NEW_ITEM':
      clonedState.newItem = action.text;
      return clonedState;
    case 'DELETE_ITEM':
      clonedState.todos.splice(action.index, 1);
      return clonedState;
    default:
      return state;
  }
}

let store = createStore(reducer, {
  newItem: 'fish',
  todos: ['test', 'test2']
});

export default class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  addItem() {
    store.dispatch({
      type: 'ADD',
      text: this.state.newItem
    });
    this.setState(store.getState());
  }

  updateNewItem(event) {
    store.dispatch({
      type: 'UPDATE_NEW_ITEM',
      text: event.target.value
    });
    this.setState(store.getState());
  }

  deleteItem(todo) {
    store.dispatch({
      type: 'DELETE_ITEM',
      index: this.state.todos.indexOf(todo)
    });
    this.setState(store.getState());
  }

  render() {
    const todoList = this.state.todos.map(d => (
        <li>{d} <button onClick={this.deleteItem.bind(this, d)}>x</button></li>
      )
    );
    return (
      <div>
        <h1>Todo List FTW!!!</h1>
        <input value={this.state.newItem} onChange={this.updateNewItem.bind(this)}></input>
        <button onClick={this.addItem.bind(this)}>add</button>
        <ul>{todoList}</ul>
      </div>
    );
  }
}
