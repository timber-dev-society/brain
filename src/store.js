import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

import StorageMiddleware, { initStorage } from './middleware/storage'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(StorageMiddleware)
)

store.dispatch(initStorage())

export default store
