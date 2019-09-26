import React from 'react'
import Checkbox from './../checkbox'
import marked from 'marked'

function renderMarkDown(text) {
  return { __html: marked(text) }
}

const Todo = ({ id, text }) => (
  <div style={{ paddingTop: '10px' }}>
    <div style={{ display: 'inline-block', marginRight: '5px', marginLeft: '-23px' }}><Checkbox /></div>
    <div style={{ display: 'inline-block', fontSize: '22px' }} for={'todo-'+id} dangerouslySetInnerHTML={renderMarkDown(text)} />
  </div>
)

export default Todo
