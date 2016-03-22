import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: 'fish',
      todos: ['test', 'test2']
    };
  }

  addItem() {
    this.setState({
      newItem: '',
      todos: [...this.state.todos, this.state.newItem]
    });
  }

  updateNewItem(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  deleteItem(todo) {
    const index = this.state.todos.indexOf(todo);
    const newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    const todoList = this.state.todos.map(d => (
        <li>{d} <button onClick={this.deleteItem.bind(this, d)}>x</button></li>
      )
    );
    return (
      <div>
        <h1>Todo List FTW!</h1>
        <input value={this.state.newItem} onChange={this.updateNewItem.bind(this)}></input>
        <button onClick={this.addItem.bind(this)}>add</button>
        <ul>{todoList}</ul>
      </div>
    );
  }
}
