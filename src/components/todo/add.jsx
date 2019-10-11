import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'
import { Escape, Enter } from 'keyboard-key'

import { addTodo } from './../../actions/todo-action'

class AddTodo extends Component {

  state = { input: '', editing: false }

  updateInput = (value) => {
    this.setState({ input: value })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  handleKeyDown = (event) => {
    if (!this.state.editing) { return }
    switch (event.keyCode) {
      case Enter: // enter
        if (event.ctrlKey) { return this.setState({ input: this.state.input + "\n" }) }
        this.props.addTodo(this.state.input)
      case Escape: // esc
        this.setState({ input: '' })
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    return (
      <Input
        className="add-todo"
        onChange={e => this.updateInput(e.target.value)}
        onFocus={()=>{this.setState({editing: true})}}
        onBlur={()=>{this.setState({editing: false})}}
        placeholder='What next'
        value={this.state.input}
        transparent={true}
        size="massive"
      />
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
