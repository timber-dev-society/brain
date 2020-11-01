import React, { useState } from 'react'
import styled from 'styled-components'
import { Escape, Enter } from 'keyboard-key'

import { todo } from './../../hooks/to-do'

const Wrapper = styled.div`
  padding-top: 10px;
  text-decoration: ${props => props.isCompleted === true ? 'line-through' : 'initial'}
`
const Title = styled.div`
  display: inline-block;
  margin-left: 10px;
`

const Id = styled.div`
  display: inline-block;
  width: 30px;
  cursor: pointer;
`

const Todo = ({ id, title, isCompleted }) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const [ value, setValue ] = useState(title)

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case Enter:
        setIsEditing(false)
        return todo(id).setTitle(value)
      case Escape:
        setIsEditing(false)
        return setValue(title)
      default:
        return
    }
  }

  return (
    <Wrapper isCompleted={isCompleted}>
      <Id onClick={ () => todo(id).toggle() }>#{id}</Id>
      { isEditing || (<Title onClick={() => setIsEditing(true)}>{title}</Title>) }
      { isEditing && (<input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} onKeyDown={(ev) => handleKeyDown(ev)} />)}
    </Wrapper>
  )
}

export default Todo
