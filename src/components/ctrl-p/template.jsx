import React, { Component, createRef } from 'react'
import { Escape, Enter, P } from 'keyboard-key'

class CtrlP extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.focus = this.focus.bind(this)
    this.state = { input: '', project: 'inbox', editing: false, visible: false }
  }

  focus() {
    this.input.current.focus();
  }

  updateInput = (value) => {
    this.setState({ input: value })
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case Enter:
        if (!this.state.editing) { return }
        // @TODO create submit action
        this.props.addTodo(this.state.input, this.state.project)
        return this.setState({ input: '' })
      case P:
        if (!event.ctrlKey) { return }
        event.preventDefault()
        this.focus()
        return this.setState({
          input: '',
          visible: !this.state.visible,
          editing: !this.state.editing,
        })
      case Escape:
        if (!this.state.editing) { return }
        return this.setState({ input: '', visible: false, editing: false })
      default:
        return
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    return (
      <div className={`ctrl-p container${this.state.visible ? ' visible' : ''}`}>
        <input
          className="input"
          onChange={e => this.updateInput(e.target.value)}
          placeholder='What next'
          value={this.state.input}
          ref={this.input}
        />
        <div className="project">@{this.state.project}</div>
      </div>
    )
  }
}

export default CtrlP
