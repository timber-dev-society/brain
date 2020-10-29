import React, { useState } from 'react'
import styled from 'styled-components'

import { createTodo } from './../hooks/to-do'
import { Input, Button } from './style'
const Container = styled.div`
  margin: 0 auto;
  width: 860px;
`

const ToDoForm = () => {
  const [ value, setValue ] = useState('')

  return (
    <Container>
      <Input type='Primary' value={value} onChange={(event) => setValue(event.target.value)} />
      <Button type='Primary' onClick={() => {
        createTodo({ title: value })
        setValue('')
      }}>add</Button>
    </Container>
  )
}

export default ToDoForm
