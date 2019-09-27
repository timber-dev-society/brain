import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from './show'
import { swipeTodoOrder } from './../../actions/todo-action'
import { dragStart, dragOver, dragEnd } from './../../actions/app-action'

const TodoList = ({ todos, ...drag }) => {
  const handleDragStart = (e, todo) => {
    drag.dragStart(todo)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
  }

  const handleDragOver = todo => {
    // if the item is dragged over itself, ignore
    if (drag.start === todo) { return }
    drag.dragOver(todo)
  }
  const handleDragEnter = todo => {
    if (drag.start.id === todo.id) { return }
    drag.swipeTodoOrder(drag.start, todo)
    drag.dragStart({...drag.start, order: todo.order})
  }

  const handleDragEnd = () => {
  //  drag.swipeTodoOrder(drag.start, drag.over)
    drag.dragEnd()
  }

  return (
    <ul style={{ listStyle: 'none' }}>
      { todos//.filter(todo => todo !== drag.start)
             .sort((a, b) => (a.order < b.order ? -1 : 1))
             .map(todo => (
                <li key={todo.id}
                    //onDragOver={() => handleDragOver(todo)}
                    onDragEnter={() => handleDragEnter(todo)}>
                  <div draggable
                       onDragStart={e => handleDragStart(e, todo)}
                       onDragEnd={handleDragEnd}>
                    <Todo {...todo} />
                  </div>
                </li>
             ))
      }
    </ul>
  )
}


const mapStateToProps = state => {
  return { todos: state.todo, ...state.app.drag }
}

export default connect(
  mapStateToProps,
  { swipeTodoOrder, dragStart, dragOver, dragEnd }
)(TodoList)
