import React from 'react'
import { IoMdCheckboxOutline }  from 'react-icons/io';

import TodoList from './../components/todo/list'

import './../assets/style/todo.sass'

const TodoPage = () => (
  <>
    <TodoList />
  </>
)

export default TodoPage
export const todoPath = '/todo'
export const todoLink = () => (<IoMdCheckboxOutline />)
