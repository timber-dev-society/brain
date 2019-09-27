import { DRAG_START, DRAG_OVER, DRAG_END } from './../actions/app-action'

const dragState = { start: {}, over: {} }
const Drag = (state = dragState, action) => {
  switch (action.type) {
    case DRAG_START:
      return {
        ...state,
        start: action.element
      }
    case DRAG_OVER:
      return {
        ...state,
        over: action.element
      }
    case DRAG_END :
      return dragState
    default:
      return state
  }
}

const initialState = { drag: dragState }
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAG_START:
    case DRAG_OVER:
    case DRAG_END :
      return {
        ...state,
        drag: Drag(state.drag, action)
      }
    default:
      return state
  }
}

export default AppReducer
