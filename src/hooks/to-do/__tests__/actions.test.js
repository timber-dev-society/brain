import { 
  PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_HIGHT,
  ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO,
} from './../constants'
import {
    
    createToDo, toggleToDo, removeToDo,
    setTitle, setContent, setParentId, setProjectId,
    setLowPriority, setMediumPriority, setHightPriority,
} from './../actions'

it('Create new ToDo', () => {
  const content = { title: 'new Todo' }
  expect(createToDo(content)).toStrictEqual({ type: ADD_TODO, payload: content })
})

it('Toggle ToDo', () => {
  expect(toggleToDo(12)).toStrictEqual({ type: TOGGLE_TODO, payload: 12 })
})

it('Remove ToDo', () => {
  expect(removeToDo(12)).toStrictEqual({ type: DELETE_TODO, payload: 12 })
})

it('Edit ToDo values', () => {
  expect(setTitle(12, 'Foo Bar')).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'title', value: 'Foo Bar' } })
  expect(setContent(12, 'Foo Bar')).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'content', value: 'Foo Bar' } })
  expect(setParentId(12, 6)).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'parentId', value: 6 } })
  expect(setProjectId(12, 6)).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'projectId', value: 6 } })
  expect(setLowPriority(12)).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'priority', value: PRIORITY_LOW } })
  expect(setMediumPriority(12)).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'priority', value: PRIORITY_MEDIUM } })
  expect(setHightPriority(12)).toStrictEqual({ type: EDIT_TODO, payload: { todoId: 12, key: 'priority', value: PRIORITY_HIGHT } })
})
