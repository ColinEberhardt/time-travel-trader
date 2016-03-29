import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
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

class TodoList extends Component {
  render() {
    const todoList = this.props.state.todos.map(d => (
        <li>{d.text} <button onClick={this.props.deleteItem.bind(this, d.id)}>x</button></li>
      )
    );
    return (
      <div>
        <h1>Todo List FTW!!!</h1>
        <input value={this.props.state.newItem} onChange={this.props.updateNewItem}></input>
        <button onClick={this.props.addItem}>add</button>
        <ul>{todoList}</ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
