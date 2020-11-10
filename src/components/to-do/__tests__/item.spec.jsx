import React from 'react'
import { render, fireEvent, createEvent } from '@testing-library/react'

import Item from './../item'

it('Should render correctly', () => {
  const { getByTestId } = render(<Item id="12" title="Foo" isCompleted={false} />)

  const Wrapper = getByTestId('todo-wrapper')
  expect(Wrapper).toBeInstanceOf(HTMLElement)

  const Id = getByTestId('todo-id')
  expect(Id).toBeInstanceOf(HTMLElement)
  expect(Id).toHaveTextContent('#12')
  
  const Title = getByTestId('todo-title')
  expect(Title).toBeInstanceOf(HTMLElement)
  expect(Title).toHaveTextContent('Foo')
})

it('Style should be change when todo isCompleted', () => {
  const { getByTestId, rerender } = render(<Item id="12" title="Foo" isCompleted={false} />)
  const Wrapper = getByTestId('todo-wrapper')

  expect(Wrapper).toHaveStyle('text-decoration: initial')

  rerender(<Item id="12" title="Foo" isCompleted={true} />)

  expect(Wrapper).toHaveStyle('text-decoration: line-through')
})

it('Style should be possible to transform title into input by clicking on it', async () => {
  const { getByTestId, rerender, debug } = render(<Item id="12" title="Foo" isCompleted={false} />)

  const Title = getByTestId('todo-title')
  expect(Title).toBeInstanceOf(HTMLElement)
  expect(Title).toHaveTextContent('Foo')

  fireEvent(Title, createEvent.click(Title))
  rerender(<Item id="12" title="Foo" isCompleted={false} />)

  const Input = getByTestId('todo-input')
  expect(Input).toBeInstanceOf(HTMLElement)
  expect(Input).toHaveValue('Foo')
})
