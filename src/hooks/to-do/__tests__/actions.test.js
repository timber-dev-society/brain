import { PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_HIGHT } from './../priority'
import {
    ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO,
    createTodo, toggleTodo, removeTodo, 
    setTitle, setContent, setParentId, setProjectId,
    setLowPriority, setMediumPriority, setHightPriority,
} from './../actions'

it('Create new ToDo', () => {
    const content = { title: 'new Todo' }
    expect(createTodo(content)).toBe({ action: ADD_TODO, payload: content })
})

it('Toggle ToDo', () => {
    expect(toggleTodo(12)).toBe({ action: TOGGLE_TODO, payload: 12 })
})

it('Remove ToDo', () => {
    expect(removeTodo(12)).toBe({ action: DELETE_TODO, payload: 12 })
})

it('Edit ToDo', () => {
    expect(setTitle(12, 'Foo Bar')).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'title', value: 'Foo Bar' } })
    expect(setContent(12, 'Foo Bar')).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'content', value: 'Foo Bar' } })
    expect(setParentId(12, 6)).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'parentId', value: 6 } })
    expect(setProjectId(12, 6)).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'projectId', value: 6 } })
    expect(setLowPriority(12)).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'priority', value: PRIORITY_LOW } })
    expect(setMediumPriority(12)).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'priority', value: PRIORITY_MEDIUM } })
    expect(setHightPriority(12)).toBe({ action: EDIT_TODO, payload: { todoId: 12, key: 'priority', value: PRIORITY_HIGHT } })
})
