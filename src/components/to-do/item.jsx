import React from 'react'
import styled from 'styled-components'

import { todo } from './../../hooks/to-do'

const Wrapper = styled.div`
  padding-top: 10px;
  text-decoration: ${props => props.isCompleted === true ? 'line-through' : 'initial'}
`

const Todo = ({ id, title, isCompleted }) => (
  <Wrapper isCompleted={isCompleted} onClick={ () => todo(id).toggle() }>
    <span>#{id}</span>
    <span>{title}</span>
  </Wrapper>
)

export default Todo
