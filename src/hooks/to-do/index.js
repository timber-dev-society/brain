import { useReducer } from 'react'

import { reducer, initialState } from 'reducer'

export default useReducer(
  reducer,
  initialState
)
