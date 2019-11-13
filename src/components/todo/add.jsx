import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Escape, Enter, Spacebar } from 'keyboard-key'

import { addTodo } from './../../actions/todo-action'

import './../../assets/style/todo/add.sass'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.input = createRef()
    this.focus = this.focus.bind(this)
    this.state = { input: '', editing: false, visible: false }
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
        this.props.addTodo(this.state.input)
        return this.setState({ input: '' })
      case Spacebar:
        if (this.state.editing) { return }
        this.focus()
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

  componentWillUpdate() {

  }

  render() {
    return (
      <div className={`todo-add-container${this.state.visible ? ' visible' : ''}`}>
        <input
          id="todo-add-input"
          className="todo-add-input"
          onChange={e => this.updateInput(e.target.value)}
          placeholder='What next'
          value={this.state.input}
          ref={this.input}
        />
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
