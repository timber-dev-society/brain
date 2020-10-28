import { combineReducers } from 'redux'
import AppReducer from './app-reducer'
import TodoReducer from './todo-reducer'

import { setToLocalStorage } from './../middleware/storage'
setToLocalStorage('@@TODO', 'todo')

const RootReducer = combineReducers({
  app: AppReducer,
  todo: TodoReducer,
})

export default RootReducer
