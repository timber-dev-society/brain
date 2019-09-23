import { combineReducers } from 'redux'
import AppReducer from './app-reducer'
import TodoReducer from './todo-reducer'

const RootReducer = combineReducers({
  app: AppReducer,
  todo: TodoReducer
})

export default RootReducer
