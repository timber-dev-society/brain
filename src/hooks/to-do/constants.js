// events
export const ON_CREATE = Symbol('@TODO_EVENTS/ON/CREATE')
export const ON_CHANGE = Symbol('@TODO_EVENTS/ON/CHANGE')
export const ON_DELETE = Symbol('@TODO_EVENTS/ON/DELETE')

// actions
export const ADD_TODO = Symbol('@@TODO/ADD')
export const TOGGLE_TODO = Symbol('@@TODO/TOGGLE')
export const DELETE_TODO = Symbol('@@TODO/DELETE')
export const EDIT_TODO = Symbol('@@TODO/EDIT')

// Priorities
export const PRIORITY_LOW = 0
export const PRIORITY_MEDIUM = 5
export const PRIORITY_HIGHT = 10
export const PRIORITY_VERY_HIGHT = 20
