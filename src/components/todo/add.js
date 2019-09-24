import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from './../../actions/todo-action'

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = { input: '' }
  }

  updateInput = (value) => {
    this.setState({ input: value })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
