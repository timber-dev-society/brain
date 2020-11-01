import { 
  PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_HIGHT,
  ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO,
} from './constants'

export const createToDo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
})

export const toggleToDo = (todoId) => ({
  type: TOGGLE_TODO,
  payload: todoId,
})

export const removeToDo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId,
})

export const setTitle = (todoId, content) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'title',
    value: content,
  },
})

export const setContent = (todoId, content) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'content',
    value: content,
  },
})

export const setLowPriority = (todoId) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'priority',
    value: PRIORITY_LOW,
  },
})

export const setMediumPriority = (todoId) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'priority',
    value: PRIORITY_MEDIUM,
  },
})

export const setHightPriority = (todoId) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'priority',
    value: PRIORITY_HIGHT,
  },
})

export const setParentId = (todoId, parentId) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'parentId',
    value: parentId,
  },
})

export const setProjectId = (todoId, projectId) => ({
  type: EDIT_TODO,
  payload: {
    todoId,
    key: 'projectId',
    value: projectId,
  },
})
