import immer from 'immer'
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./actions"

export const initialState = []

export const reducer = (state, { type, ...action }) => {

  switch (type) {
    case ADD_TODO:
      return state
    case EDIT_TODO:
      return state
    case DELETE_TODO:
      return state
    default:
      return state
  }
}
