import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SWIPE_TODO_ORDER
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
    case SWIPE_TODO_ORDER:
      console.log(state.order, action.todo.order)
      return {
        ...state,
        order: action.todo.order,
      }
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
    case SWIPE_TODO_ORDER:
      const todoFrom = state.find(todo => todo.id === action.from)
      const todoTo = state.find(todo => todo.id === action.to)
      return state.map(todo => {
        if (todo === todoFrom) { return Todo(todo, { type: SWIPE_TODO_ORDER, todo: todoTo }) }
        if (todo === todoTo) { return Todo(todo, { type: SWIPE_TODO_ORDER, todo: todoFrom }) }
        return todo
      })
    default:
      return state
  }
}

export default TodoReducer
