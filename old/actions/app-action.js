export const DND_START = '@@APP/DND_START'
export const dndStart = element => ({
  type: DND_START,
  element,
})

export const DND_END = '@@APP/DND_END'
export const dndEnd = element => ({
  type: DND_END,
})

export const CHANGE_PAGE = '@@APP/CHANGE_PAGE'
export const changePage = path => {
  document.location.hash = path
  return {
    type: CHANGE_PAGE,
    path: document.location.hash,
  }
}

export const CHANGE_PROJECT = '@@APP/CHANGE_PROJECT'
export const changeProject = project => ({
  type: CHANGE_PROJECT,
  project
})
