import { useReducer } from 'react'

import { reducer, initialState } from './reducer'
import { 
  createToDo, removeToDo, setTitle, setContent, toggleToDo, 
  setParentId, setProjectId, setLowPriority, setMediumPriority, setHightPriority
} from './actions'
import {
  ON_CREATE, ON_CHANGE, ON_DELETE,
} from './constants'
import PubSub, { createEvent } from './../../lib/pubsub'

const dispatcher = { create: null, edit: null, delete: null }
const todoEvents = PubSub()

const useToDo = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  dispatcher.create = (action) => { 
    dispatch(action)
    todoEvents.publish(createEvent(ON_CREATE)([...state.ToDo.values()].pop()))
  }
  dispatcher.edit = (id) => (action) => {
    dispatch(action)
    todoEvents.publish(createEvent(ON_CHANGE)(state.ToDo.get(id)))
  }
  dispatcher.delete = (id) => { 
    const todo = state.ToDo.get(id)
    dispatch(removeToDo(id))
    todoEvents.publish(createEvent(ON_DELETE)(todo))
  }

  return [
    () => [...state.ToDo.values()]
  ]
}

export default useToDo

export const createTodo = (ToDo) => dispatcher.create(createToDo(ToDo))

export const removeTodo = (id) => dispatcher.delete(removeToDo(id))

export const ToDo = (id) => ({
  setTitle: (title) => dispatcher.edit(id)(setTitle(id, title)),
  setContent: (content) => dispatcher.edit(id)(setContent(id, content)),
  toggle: () => dispatcher.edit(id)(toggleToDo(id)),
  setParent: (parentId) => dispatcher.edit(id)(setParentId(id, parentId)),
  setProject: (projectId) => dispatcher.edit(id)(setProjectId(id, projectId)),
  setLowPriority: () => dispatcher.edit(id)(setLowPriority(id)),
  setMediumPriority: () => dispatcher.edit(id)(setMediumPriority(id)),
  setHightPriority: () => dispatcher.edit(id)(setHightPriority(id)),
})

ToDo.addEventListener = todoEvents.subscribe
ToDo.removeEventListener = todoEvents.unsubscribe

export const ToDoEvents = { 
  onCreate: ON_CREATE,
  onChange: ON_CHANGE,
  onDelete: ON_DELETE
}
