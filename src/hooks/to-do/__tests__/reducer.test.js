import { initialState, defaultToDo, reducer } from './../reducer'
import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO } from './../actions'

let currentId = 0

beforeEach(() => currentId++)

it('It should add todo in reducer', () => {
  const newState = reducer(initialState, { type: ADD_TODO, payload: { title: 'something todo' } })

  expect(newState.ToDo).toBeDefined()
  expect(newState.ToDo.has(currentId)).toBe(true)
  expect(newState.ToDo.get(currentId)).toStrictEqual({
    ...defaultToDo,
    id: 1,
    title: 'something todo',
  })
})

it('It should toggle todo in reducer', () => {
  const oldState = reducer(initialState, { type: ADD_TODO, payload: {} })
  const newState = reducer(oldState, { type: TOGGLE_TODO, payload: currentId })

  expect(oldState.ToDo.get(currentId).isCompleted).toBe(false)
  expect(newState.ToDo.get(currentId).isCompleted).toBe(true)
})

it('It should change the todo value in reducer', () => {
  const oldState = reducer(initialState, { type: ADD_TODO, payload: { title: 'Foo' } })
  const newState = reducer(oldState, { type: EDIT_TODO, payload: { todoId: currentId, key: 'title', value: 'Bar' } })

  expect(oldState.ToDo.get(currentId).title).toBe('Foo')
  expect(newState.ToDo.get(currentId).title).toBe('Bar')
})

it('It should delete the todo in reducer', () => {
  const oldState = reducer(initialState, { type: ADD_TODO, payload: {} })
  const newState = reducer(oldState, { type: DELETE_TODO, payload: currentId })

  expect(oldState.ToDo.has(currentId)).toBe(true)
  expect(newState.ToDo.has(currentId)).toBe(false)
})
