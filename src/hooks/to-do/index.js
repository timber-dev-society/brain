import React, { useReducer } from 'react'

import { reducer, initialState } from './reducer'
import { createToDo } from './actions'

const useToDo = () => {

  const [ state, dispatch ] = useReducer(
    reducer,
    initialState
  )
  
  return { 
    toDoList: () => [...state.ToDo.values()],
    createToDo: (ToDo) => { dispatch(createToDo(ToDo)) },
  }
}

export default useToDo
