import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Escape, Enter, Spacebar } from 'keyboard-key'

import { addTodo } from './../../actions/todo-action'

import './../../assets/style/todo/add.sass'

class AddTodo extends Component {

  state = { input: '', editing: false, visible: false }

  updateInput = (value) => {
    this.setState({ input: value })
  }

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case Enter:
        if (!this.state.editing) { return }
        this.props.addTodo(this.state.input)
        return this.setState({ input: '' })
      case Spacebar:
        if (this.state.editing) { return }
        return this.setState({ input: '', visible: true, editing: true })
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
      <div className={`todo-add-container${this.state.visible ? ' visible' : ''}`}>
        <input
          className="todo-add-input"
          onChange={e => this.updateInput(e.target.value)}
          placeholder='What next'
          value={this.state.input}
        />
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
