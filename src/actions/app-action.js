export const DND_START = '@@APP/DND_START'
export const dndStart = (element) => ({
  type: DND_START,
  element,
})

export const DND_END = '@@APP/DND_END'
export const dndEnd = (element) => ({
  type: DND_END,
})


export const EDIT_NOTE = '@@APP/NOTE_EDIT'
export const editNote = (value) => ({
  type: EDIT_NOTE,
  value,
})

export const END_NOTE_EDITING = '@@APP/END_NOTE_EDITING'
export const endNoteEditing = () => ({
  type: END_NOTE_EDITING,
})

export const CHANGE_PAGE = '@@APP/CHANGE_PAGE'
export const changePage = (path) => {
  document.location.hash = path
  return {
    type: CHANGE_PAGE,
    path: document.location.hash
  }
}
