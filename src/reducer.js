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

export default reducer;
