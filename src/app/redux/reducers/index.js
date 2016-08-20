import { createStore } from 'redux'

const initialState = {
  todos: [],
  filter: 'all'
}

export default function todoChangeHandler (state = initialState , action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [ action.todo, ...state.todos ]
      })
    case 'TODO_TOGGLE_DONE':
      const todos = state.todos.map(todo => todo.id === action.id
        ? Object.assign({}, todo, { done: !todo.done })
        : todo
      )
      return Object.assign({}, state, { todos: todos })
    case 'FILTER_TODO':
      return Object.assign({}, state, { filter: action.filter })
    case 'REFRESH_TODO':
      return Object.assign({}, initialState, { todos: action.todos })
    default:
      return state
  }
}

export const todos = createStore(todoChangeHandler, initialState)
