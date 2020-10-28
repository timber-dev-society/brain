import React, { useState } from 'react'

import { createTodo } from './../hooks/to-do'

const Input = () => {
  const [ value, setValue ] = useState('')

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <div onClick={() => {
        createTodo({ title: value })
        setValue('')
      }}>add</div>
    </div>
  )
}

export default Input
