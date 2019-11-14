import React from 'react'
import { connect } from 'react-redux'

import Todo from './show'
import { swipeTodoOrder } from './../../actions/todo-action'
import { dndStart, dndEnd } from './../../actions/app-action'

const TodoList = ({ todos, project, ...dnd }) => {
  const handleDragStart = (e, todo) => {
    dnd.dndStart(todo)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
  }

  const handleDragEnter = todoId => {
    if (dnd.start === todoId) { return }
    dnd.swipeTodoOrder(dnd.start, todoId)
  }

  return (
    <ul style={{ listStyle: 'none' }}>
      { todos.filter(todo => (todo.project === project))
             .sort((a, b) => (a.order < b.order ? -1 : 1))
             .map(todo => (
                <li key={todo.id} onDragEnter={() => handleDragEnter(todo.id)}>
                  <div draggable
                       onDragStart={e => handleDragStart(e, todo.id)}
                       onDragEnd={dndEnd}>
                    <Todo {...todo} />
                  </div>
                </li>
             ))
      }
    </ul>
  )
}


const mapStateToProps = state => {
  return { todos: state.todo, project: state.app.project, ...state.app.DnD }
}

export default connect(
  mapStateToProps,
  { swipeTodoOrder, dndStart, dndEnd }
)(TodoList)
