import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers'
import StorageMiddleware, { initStorage } from './middleware/storage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(StorageMiddleware)),
)

store.dispatch(initStorage())

export default store
