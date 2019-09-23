export const ADD_TODO = Symbol('@@TODO/ADD')
export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})

export const REMOVE_TODO = Symbol('@@TODO/REMOVE')
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})

export const COMPLETE_TODO = Symbol('@@TODO/COMPLETE')
export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})
