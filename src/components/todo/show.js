import React from 'react'

const Todo = ({ id, text }) => (
  <div>
    <input type="checkbox" name={'todo-'+id} />
    <label for={'todo-'+id}>{text}</label>
  </div>
)

export default Todo
