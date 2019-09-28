import { DND_START, DND_END } from './../actions/app-action'

const initialDnDState = { start: {} }
const DnD = (state = initialDnDState, action) => {
  switch (action.type) {
    case DND_START:
      return {
        ...state,
        start: action.element
      }
    case DND_END :
      return initialDnDState
    default:
      return state
  }
}

const initialState = { DnD: initialDnDState }
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case DND_START:
    case DND_END :
      return {
        ...state,
        DnD: DnD(state.drag, action)
      }
    default:
      return state
  }
}

export default AppReducer
