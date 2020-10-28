import React from 'react'
import { IoMdDocument }  from 'react-icons/io';

import Editor from './../components/note/editor'

const NotePage = () => (
  <Editor />
)

export default NotePage
export const notePath = '/note'
export const noteLink = () => (<IoMdDocument />)
