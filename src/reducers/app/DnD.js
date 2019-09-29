import { DND_START, DND_END } from './../../actions/app-action'

export const initialDnDState = { start: {} }
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

export default DnD
