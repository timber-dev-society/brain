import React, { useState } from 'react'
import { Escape, Enter } from 'keyboard-key'

import { ToDo } from './../../hooks/to-do'
import { Wrapper, Id, Title, Input, DotDotDot } from './item.style'

const getWordSize = (word) => (word.length + 1) * 8

const Todo = ({ id, title, isCompleted }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ value, setValue ] = useState(title)
  const [ inputSize, setInputSize ] = useState(getWordSize(title))

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case Enter:
        setIsEditing(false)
        return ToDo(id).setTitle(value)
      case Escape:
        setIsEditing(false)
        return setValue(title)
      default:
        return
    }
  }

  return (
    <Wrapper data-testid="todo-wrapper" isCompleted={isCompleted}>
      <Id data-testid="todo-id" onClick={ () => ToDo(id).toggle() }>#{id}</Id>
      { isEditing || (<Title data-testid="todo-title" onClick={() => setIsEditing(true)}>{title}{ title !== value && (<DotDotDot />)}</Title>) }
      { isEditing && (<Input
        data-testid="todo-input"
        style={{ width: `${inputSize}px` }}
        type="text" 
        value={value} 
        onChange={(ev) => {
          setInputSize(getWordSize(ev.target.value))
          setValue(ev.target.value)
        }} 
        onKeyDown={(ev) => handleKeyDown(ev)} 
        onBlur={() => setIsEditing(false) }
      />) }
    </Wrapper>
  )
}

export default Todo
