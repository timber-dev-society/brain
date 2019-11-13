import { connect } from 'react-redux'

import { addTodo } from './../../actions/todo-action'

import './style.sass'
import CtrlP from './template'


export default connect(
  null,
  { addTodo }
)(CtrlP)
