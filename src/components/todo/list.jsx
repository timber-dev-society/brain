import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from './show'
import { swipeTodoOrder } from './../../actions/todo-action'

class TodoList extends Component {

  constructor(props) {
    super(props)
    console.log(props);
    this.state = { todos: props.todos }
  }

  onDragStart = (e, index) => {
    this.draggedItem = this.state.todos.find(todo => todo.id === index)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
  }

  onDragOver = index => {
    // if the item is dragged over itself, ignore
    if (this.draggedItem.id === index) { return }

    // filter out the currently dragged item
    const todos = this.state.todos.filter(todo => todo.id !== this.draggedItem.id)
    const todo = this.state.todos.find(todo => todo.id === index)

    this.props.swipeTodoOrder(this.draggedItem, todo)

    // add the dragged item after the dragged over item
    this.setState({ todos })
  }

  onDragEnd = () => {
    this.draggedIdx = null
  }

  render() {
    return (
      <ul style={{ listStyle: 'none' }}>
        { this.state.todos.sort((a, b) => (a.order < b.order ? -1 : 1))
                .map(todo => (
                  <li key={todo.id} onDragOver={() => this.onDragOver(todo.id)}>
                    <div draggable
                         onDragStart={e => this.onDragStart(e, todo.id)}
                         onDragEnd={this.onDragEnd}>
                      <Todo {...todo} />
                    </div>
                  </li>
                ))
        }
      </ul>
    );
  }
}


const mapStateToProps = state => {
  return { todos: state.todo }
}

export default connect(
  mapStateToProps,
  { swipeTodoOrder }
)(TodoList)
