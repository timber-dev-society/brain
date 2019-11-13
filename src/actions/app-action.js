export const DND_START = '@@APP/DND_START'
export const dndStart = (element) => ({
  type: DND_START,
  element,
})

export const DND_END = '@@APP/DND_END'
export const dndEnd = (element) => ({
  type: DND_END,
})

export const CHANGE_PAGE = '@@APP/CHANGE_PAGE'
export const changePage = (path) => {
  document.location.hash = path
  return {
    type: CHANGE_PAGE,
    path: document.location.hash,
  }
}

export const TOGGLE_ADD_TODO = '@@APP/TOGGLE_ADD_TODO_VISIBILITY'
export const toggleAddTodo = () => ({
  type: TOGGLE_ADD_TODO,
})
