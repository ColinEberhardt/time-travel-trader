import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './reducer'

let store = createStore(reducer, {
  newItem: 'fish',
  todos: ['test', 'test2']
});

export default class TodoList extends Component {
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
