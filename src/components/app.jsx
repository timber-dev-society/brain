import React from 'react'
import styled from 'styled-components'

import Input from './input'
import ToDoList from './to-do/list'
import '../assets/style/reset.css'

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const App = () => (
  <Wrapper>
    <Input />
    <ToDoList />
  </Wrapper>
)

export default App
