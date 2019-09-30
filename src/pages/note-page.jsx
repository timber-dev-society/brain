import React from 'react'
import { IoMdDocument }  from 'react-icons/io';

import Editor from './../components/note/editor'

const NotePage = () => (
  <Editor />
)

export default NotePage
export const url = '/note'
export const link = () => (<IoMdDocument />)
