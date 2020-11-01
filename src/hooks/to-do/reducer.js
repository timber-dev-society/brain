import produce, { enableMapSet } from 'immer'
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, PRIORITY_LOW } from './constants'

enableMapSet()

export const initialState = { ToDo: new Map([]) }
export const defaultToDo = { id: 0, title: '', content: '', projectId: null, parentId: null, priority: PRIORITY_LOW, isCompleted: false }
let lastInsertedId = 0

export const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const id = ++lastInsertedId
      draft.ToDo.set(id, {
        ...defaultToDo,
        ...payload,
        id,
      })
      break
    }

    case TOGGLE_TODO: {
      draft.ToDo.get(payload).isCompleted = !draft.ToDo.get(payload).isCompleted
      break
    }

    case EDIT_TODO: {
      draft.ToDo.get(payload.todoId)[payload.key] = payload.value
      break
    }

    case DELETE_TODO:
      draft.ToDo.delete(payload)
      break

    default:
      throw new Error('Method not allowed')
  }
})
