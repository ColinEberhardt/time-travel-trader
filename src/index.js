import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';
import { Provider } from 'react-redux';
import todoStore from './todostore';

let store = todoStore();

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root'));
