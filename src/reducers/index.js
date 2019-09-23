import { combineReducers } from 'redux'
import AppReducer from './app'

const RootReducer = combineReducers({
  app: AppReducer
})

export default RootReducer
