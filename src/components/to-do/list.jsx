import React from 'react'

import useToDo from './../../hooks/to-do'
import Item from './item'

const ToDoList = () => {
  const [ toDoList ] = useToDo()

  return (
    <div>
      { toDoList().map(todo => (<Item key={todo.id} {...todo} />)) }
    </div>
  )
}

export default ToDoList
