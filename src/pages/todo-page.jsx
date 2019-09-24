import React from 'react'
import { connect } from 'react-redux'

import AddTodo from './../components/todo/add'
import Todo from './../components/todo/show'

const TodoPage = ({ todos }) => (
  <>
    <AddTodo />
    { todos.map(todo => <Todo key={todo.id} {...todo} />) }
  </>
)

const mapStateToProps = state => {
  return { todos: state.todo }
}

export default connect(
  mapStateToProps,
  null
)(TodoPage)
