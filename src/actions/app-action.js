export const DND_START = '@@APP/DND_START'
export const dndStart = (element) => ({
  type: DND_START,
  element,
})

export const DND_END = '@@APP/DND_END'
export const dndEnd = (element) => ({
  type: DND_END,
})
