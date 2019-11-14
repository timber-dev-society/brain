import { Escape, Enter, P } from 'keyboard-key'

export const handleKey = (event, comp) => {
  switch (event.keyCode) {
    case Enter:
      if (!comp.state.editing) { return }
      // @TODO create submit action
      comp.props.addTodo(comp.state.input, comp.state.project)
      return comp.setState({ input: '' })
    case P:
      if (!event.ctrlKey) { return }
      event.preventDefault()
      comp.focus()
      return comp.setState({
        input: '',
        visible: !comp.state.visible,
        editing: !comp.state.editing,
      })
    case Escape:
      if (!comp.state.editing) { return }
      return comp.setState({ input: '', visible: false, editing: false })
    default:
      return
  }
}
