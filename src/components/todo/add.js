import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'


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

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 13:
        this.props.addTodo(this.state.input)
      case 27:
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
