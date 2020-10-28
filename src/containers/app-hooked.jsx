import React from 'react'

import useToDo from './../hooks/to-do'

const App = () => {
  const { toDoList, createToDo } = useToDo()

  return (
    <div>
      <div onClick={() => createToDo({ title: 'Foo' })}>Add</div>
      <ul>{ toDoList().map(ToDo => (<li key={ToDo.id}>{ToDo.title}</li>)) }</ul>
    </div>
  )
}

export default App
