export const ADD_TODO = '@@TODO/ADD'
export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})

export const REMOVE_TODO = '@@TODO/REMOVE'
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id
})

export const TOGGLE_TODO = '@@TODO/TOGGLE'
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})
