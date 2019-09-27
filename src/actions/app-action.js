export const DRAG_START = '@@APP/DRAG_START'
export const dragStart = (element) => ({
  type: DRAG_START,
  element,
})

export const DRAG_OVER = '@@APP/DRAG_OVER'
export const dragOver = (element) => ({
  type: DRAG_OVER,
  element,
})

export const DRAG_END = '@@APP/DRAG_END'
export const dragEnd = (element) => ({
  type: DRAG_END,
})
