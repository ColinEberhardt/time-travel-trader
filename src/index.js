import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist';
import { Provider } from 'react-redux';
import todoStore from './todostore';
import DevTools from './devtools';

let store = todoStore();


ReactDOM.render(
  <Provider store={store}>
    <div>
      <TodoList />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));
