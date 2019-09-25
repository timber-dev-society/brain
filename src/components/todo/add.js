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

  render() {
    return (
      <div style={{ margin: '5px auto', width: '80%' }}>
        <div className="ui input" style={{ width: '80%' }}>
          <input
            style={{ borderRadius: '5px 0 0 5px' }}
            onChange={e => this.updateInput(e.target.value)}
            placeholder='What next'
            value={this.state.input}
          />
        </div>
        <Button style={{ width: '19.5%', margin: 0, borderRadius: '0 5px 5px 0', fontSize: '1.3rem' }} className="add-todo ui label label" onClick={this.handleAddTodo}>
          {'//'} @Todo
        </Button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
