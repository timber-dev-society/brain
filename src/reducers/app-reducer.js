import { DND_START, DND_END, EDIT_NOTE, END_NOTE_EDITING, CHANGE_PAGE } from './../actions/app-action'
import DnD, { initialDnDState } from './app/DnD'

const initialPage = document.location.hash.length !== 0 ? document.location.hash : '#/todo'
const initialState = { DnD: initialDnDState, note: null, page: initialPage }
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case DND_START:
    case DND_END:
      return {
        ...state,
        DnD: DnD(state.drag, action)
      }
    case EDIT_NOTE:
      return {
        ...state,
        note: action.note
      }
    case END_NOTE_EDITING:
      return {
        ...state,
        note: null
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.path
      }
    default:
      return state
  }
}

export default AppReducer
