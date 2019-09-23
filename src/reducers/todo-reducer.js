import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from './../actions/todo-action'

let id = 1

const initialState = {
  id: 0,
  text: '',
  complete: false
}

const Todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: id++,
        text: action.text,
        complete: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) { return state }
      return {
        complete: !state.complete,
        ...state
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
      return [
        Todo(undefined, action),
        ...store
      ]
    case TOGGLE_TODO:
      return state.map(todo => Todo(todo, action))
    case REMOVE_TODO:
      return state.filter(todo => Todo(todo, action))
    default:
      return state
  }
}

export default TodoReducer;
