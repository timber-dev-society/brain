import { DND_START, DND_END, CHANGE_PAGE, CHANGE_PROJECT } from './../actions/app-action'
import DnD, { initialDnDState } from './app/DnD'

const initialPage = document.location.hash.length !== 0 ? document.location.hash : '#/todo'
const initialState = { DnD: initialDnDState, page: initialPage, project: 'inbox' }
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case DND_START:
    case DND_END:
      return {
        ...state,
        DnD: DnD(state.drag, action)
      }
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.path
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
