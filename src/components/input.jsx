import React, { useState } from 'react'
import styled from 'styled-components'

import { createTodo } from './../hooks/to-do'
import { Input, Button } from './style'

const InputEl = styled(Input)`
  border-radius: 5px 0 0 5px;
`
const ButtonEl = styled(Button)`
  border-radius: 0 5px 5px 0;
`
const Container = styled.div`
  margin: 0 auto;
  width: 860px;
`

const ToDoForm = () => {
  const [ value, setValue ] = useState('')

  return (
    <Container>
      <InputEl type='Primary' value={value} onChange={(event) => setValue(event.target.value)} />
      <ButtonEl type='Primary' onClick={() => {
        createTodo({ title: value })
        setValue('')
      }}>add</ButtonEl>
    </Container>
  )
}

export default ToDoForm
