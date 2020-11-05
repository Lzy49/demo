export default (state = {
  todolist: []
}, action) => {
  switch (action.type) {
    case 'ADDTODO':
      state.todolist.push(action.value)
      return state
    default:
      return state
  }
}