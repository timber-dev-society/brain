import React from 'react'
import { IoMdCheckboxOutline }  from 'react-icons/io';

import AddTodo from './../components/todo/add'
import TodoList from './../components/todo/list'

import './../assets/style/todo.scss'

const TodoPage = () => (
  <>
    <TodoList />
    <AddTodo />
  </>
)

export default TodoPage
export const todoPath = '/todo'
export const todoLink = () => (<IoMdCheckboxOutline />)
