import React from 'react'
import Checkbox from './../checkbox'

const Todo = ({ id, text }) => (
  <div>
    <Checkbox />
    <label for={'todo-'+id}>{text}</label>
  </div>
)

export default Todo
