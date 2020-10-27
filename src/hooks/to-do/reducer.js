import produce from 'immer'
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from "./actions"
import { PRIORITY_LOW } from './priority'

const initialState = {}
const defaultToDo = { id: 0, title: '', content: '', projectId: null, parentId: null, priority: PRIORITY_LOW }
let lastInsertedId = 0

export const reducer = produce((draft, { type, payload }) => {

  switch (type) {
    case ADD_TODO:
      const id = ++lastInsertedId
      draft[id] = {
        ...defaultToDo,
        ...payload,
      }
      return

    case TOGGLE_TODO:
      draft[payload].isCompleted = !draft[id].isCompleted
      return

    case EDIT_TODO:
      draft[payload.id] = {
        ...draft[payload.id],
        ...payload.values,
      }
      return

    case DELETE_TODO:
      delete draft[payload]
      return

    default:
      return

  }
})(initialState)
