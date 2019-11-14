import { Escape, Enter, P, AtSign, PoundSign } from 'keyboard-key'

export const CMD = Symbol('CMD')
export const CHANGE_PROJECT = Symbol('CHANGE_PROJECT')
export const ASSIGN_PROJECT = Symbol('ASSIGN_PROJECT')
export const ADD_TODO = Symbol('ADD_TODO')

const internals = { component: undefined, action: ADD_TODO }

const ctrlP = () => {
  internals.component.focus()
  internals.component.setState({
    input: '',
    visible: !internals.component.state.visible,
    editing: !internals.component.state.editing,
  })
}

export const handleChange = (value) => {
  if (/^@\w*/.test(value)) {
    internals.action = CHANGE_PROJECT
  } else if (/^:\w*/.test(value)) {
    internals.action = ASSIGN_PROJECT
  } else if (/\s@\w*/.test(value)) {
    internals.action = CMD
  } else {
    internals.action = ADD_TODO
  }
  internals.component.setState({ input: value })
}

export const init = (component) => { internals.component = component }

export const submit = () => {
  switch (internals.action) {
    case ADD_TODO:
      internals.component.props.addTodo(internals.component.state.input, internals.component.state.project)
      internals.component.setState({ input: '' })
      return
    case CHANGE_PROJECT:
      const project = internals.component.state.input.substr(1)
      internals.component.props.changeProject(project)
      internals.component.setState({ input: '', project  })
      break
    case ASSIGN_PROJECT:
      console.log('Submit ASSIGN_PROJECT', internals.component.state.input)
      break
    case CMD:
      console.log('Submit CMD', internals.component.state.input)
      break
    default:
      return
  }
  internals.action = ADD_TODO
}

export const handleKey = (event) => {
  switch (event.keyCode) {
    case Enter:
      if (!internals.component.state.editing) { return }
      return submit()
    case P:
      if (!event.ctrlKey) { return }
      event.preventDefault()
      return ctrlP()
    case Escape:
      if (!internals.component.state.editing) { return }
      return internals.component.setState({ input: '', visible: false, editing: false })
    default:
      return
  }
}
