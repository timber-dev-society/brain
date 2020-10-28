import React from 'react'

import useToDo from './../hooks/to-do'
import Input from './input'

const App = () => {
  const { toDoList } = useToDo()

  return (
    <div>
      <Input />
      <ul>{ toDoList().map(ToDo => (<li key={ToDo.id}>{ToDo.title}</li>)) }</ul>
    </div>
  )
}

export default App
