import { DND_START, DND_END, CHANGE_PAGE, TOGGLE_ADD_TODO } from './../actions/app-action'
import DnD, { initialDnDState } from './app/DnD'

const initialPage = document.location.hash.length !== 0 ? document.location.hash : '#/todo'
const initialState = { DnD: initialDnDState, page: initialPage, addTodoVisible: false }
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
    case TOGGLE_ADD_TODO:
      return {
        ...state,
        addTodoVisible: !state.addTodoVisible
      }
    default:
      return state
  }
}

export default AppReducer
