import React from 'react'
import marked from 'marked'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'reactstrap'
import { IoIosRemove } from 'react-icons/io'

import Checkbox from './../form/checkbox'
import { toggleTodo, removeTodo } from './../../actions/todo-action'

function renderMarkDown (text) {
  return { __html: marked(text) }
}

const Todo = ({ id, text, complete, toggleTodo, removeTodo }) => (
  <Row style={{ paddingTop: '10px' }} className={`todo ${complete ? 'complete' : 'uncomplete'}`}>
    <Col xs="1">
      <Checkbox handleChange={() => toggleTodo(id)} checked={complete} />
    </Col>
    <Col xs="10">
      <span className="content id text-secondary">#{id}</span>
      <span className="content text" dangerouslySetInnerHTML={renderMarkDown(text)} />
    </Col>
    {/* <Col xs="1" className="actions">
      <Button onClick={() => { removeTodo(id) }} color="danger"><IoIosRemove /></Button>
    </Col> */}
  </Row>
)

export default connect(
  null,
  { toggleTodo, removeTodo }
)(Todo)
