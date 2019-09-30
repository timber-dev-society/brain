import React from 'react'
import { IoMdCheckboxOutline }  from 'react-icons/io';

import AddTodo from './../components/todo/add'
import TodoList from './../components/todo/list'

import './../assets/css/todo.css'

const TodoPage = ({ todos }) => (
  <>
    <TodoList />
    <AddTodo />
  </>
)

export default TodoPage
export const url = '/todo'
export const link = () => (<IoMdCheckboxOutline />)
