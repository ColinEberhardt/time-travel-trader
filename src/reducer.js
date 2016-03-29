import Todo from './todo';

const reducer = (state, action) => {

  // a dirty clone
  var clonedState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case 'ADD':
      clonedState.todos.push(new Todo(clonedState.newItem));
      clonedState.newItem = '';
      return clonedState;
    case 'UPDATE_NEW_ITEM':
      clonedState.newItem = action.text;
      return clonedState;
    case 'DELETE_ITEM':
      const index = clonedState.todos.findIndex(d => d.id === action.id);
      clonedState.todos.splice(index, 1);
      return clonedState;
    default:
      return state;
  }
}

export default reducer;
