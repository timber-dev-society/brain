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

export const TOGGLE_TODO = Symbol('@@TODO/TOGGLE')
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})
