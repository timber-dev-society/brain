import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SWIPE_TODO_ORDER,
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
      if (state.id !== action.id) { return state }
      return {
        ...state,
        complete: !state.complete,
      }
    case REMOVE_TODO:
      if (state.id !== action.id) { return true }
      return false
    case SWIPE_TODO_ORDER:
      return {
        ...state,
        order: action.todo.order,
      }
    default:
      return state
  }
}

const TodoCollection = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      action.order = state.length
      return [
        ...state,
        Todo(initialState, action),
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

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_TODO:
    case REMOVE_TODO:
    case SWIPE_TODO_ORDER:
      return state.map(collection => {
        if (collection.id !== state.collection_id) { return state }
        return { collection: TodoCollection(state.collection), ...state }
      })

    default:
      return state
  }
}

export default TodoCollection //TodoReducer
