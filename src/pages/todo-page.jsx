import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './../components/todo/add'
import Todo from './../components/todo/show'

const TodoPage = ({ todos }) => (
  <>
    <ul style={{ listStyle: 'none' }}>
      { todos.map(todo => <li key={todo.id}><Todo {...todo} /></li>) }
    </ul>
    <AddTodo />
  </>
)

const mapStateToProps = state => {
  return { todos: state.todo }
}

export default connect(
  mapStateToProps,
  null
)(TodoPage)
