import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from './../actions/todo-action'

let id = 1

const initialState = {
  id: 0,
  text: '',
  complete: false,
  order: 0,
}

const Todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: id++,
        text: action.text,
        complete: false,
        order: action.order,
      }
    case TOGGLE_TODO:
      console.log(state.id === action.id, state.id, action.id, !state.complete);
      if (state.id !== action.id) { return state }
      return {
        ...state,
        complete: !state.complete,
      }
    case REMOVE_TODO:
      if (state.id !== action.id) { return true }
      return false
    default:
      return state
  }
}

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      action.order = state.length
      return [
        ...state,
        Todo(undefined, action)
      ]
    case TOGGLE_TODO:
      return state.map(todo => Todo(todo, action))
    case REMOVE_TODO:
      return state.filter(todo => Todo(todo, action))
    default:
      return state
  }
}

export default TodoReducer
