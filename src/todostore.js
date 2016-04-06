import { createStore } from 'redux';
import DevTools from './devtools';
import reducer from './reducer';
import Todo from './todo';

export default function todoStore() {
  return createStore(reducer, {
    newItem: 'fish',
    todos: [new Todo('test'), new Todo('test2'), new Todo('test3')]
  }, DevTools.instrument());
}