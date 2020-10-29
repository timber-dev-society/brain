import { useReducer } from 'react'

import { reducer, initialState } from './reducer'
import { 
  createToDo, removeToDo, setTitle, setContent, toggleToDo, 
  setParentId, setProjectId, setLowPriority, setMediumPriority, setHightPriority
} from './actions'

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

export const removeTodo = (ToDo) => { dispatcher(removeToDo(ToDo)) }

export const todo = (id) => ({
  setTitle: (title) => dispatcher(setTitle(id, title)),
  setContent: (content) => dispatcher(setContent(id, content)),
  toggle: () => dispatcher(toggleToDo(id)),
  setParent: (parentId) => dispatcher(setParentId(id, parentId)),
  setProject: (projectId) => dispatcher(setProjectId(id, projectId)),
  setLowPriority: () => dispatcher(setLowPriority(id)),
  setMediumPriority: () => dispatcher(setMediumPriority(id)),
  setHightPriority: () => dispatcher(setHightPriority(id)),
})
