const DRAG_START = '@@APP/DRAG_START'
const dragStart = (element) => ({
  type: DRAG_START,
  element,
})

const DRAG_OVER = '@@APP/DRAG_OVER'
const dragOver = (element) => ({
  type: DRAG_OVER,
  element,
})

const DRAG_END = '@@APP/DRAG_END'
const dragOver = (element) => ({
  type: DRAG_END,
})
