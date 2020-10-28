import { useReducer } from 'react'

import { reducer, initialState } from './reducer'
import { createToDo } from './actions'

let dispatcher = null
const useToDo = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  dispatcher = dispatch

  return {
    toDoList: () => [...state.ToDo.values()],
  }
}

export default useToDo


export const createTodo = (ToDo) => { dispatcher(createToDo(ToDo)) }
