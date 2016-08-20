export function toggleTodoState (id) {
  return {
    type: 'TODO_TOGGLE_DONE',
    id
  }
}

export function addTodo (todo) {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export function filterTodo (filter) {
  return {
    type: 'FILTER_TODO',
    filter
  }
}

export function refreshTodos (todos) {
  return {
    type: 'REFRESH_TODO',
    todos
  }
}
