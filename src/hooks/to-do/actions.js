import { PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_HIGHT } from './priority'

export const ADD_TODO = Symbol('@@TODO/ADD')
export const createToDo = (todo) => ({
    action: ADD_TODO,
    payload: todo,
})

export const TOGGLE_TODO = Symbol('@@TODO/TOGGLE')
export const toggleToDo = (todoId) => ({
    action: TOGGLE_TODO,
    payload: todoId,
})

export const DELETE_TODO = Symbol('@@TODO/DELETE')
export const removeTodo = (todoId) => ({
    action: DELETE_TODO,
    payload: todoId,
})

export const EDIT_TODO = Symbol('@@TODO/EDIT')
export const setTitle = (todoId, content) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'title',
        values: content,
    },
})
export const setContent = (todoId, content) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'content',
        values: content,
    },
})
export const setLowPriority = (todoId) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'priority',
        values: PRIORITY_LOW,
    },
})
export const setMediumPriority = (todoId) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'priority',
        values: PRIORITY_MEDIUM,
    },
})
export const setHightPriority = (todoId) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'priority',
        values: PRIORITY_HIGHT,
    },
})
export const setParentId = (todoId, parentId) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'parentId',
        values: parentId,
    },
})
export const setProjectId = (todoId, projectId) => ({
    action: EDIT_TODO,
    payload: {
        todoId,
        key: 'projectId',
        values: projectId,
    },
})
