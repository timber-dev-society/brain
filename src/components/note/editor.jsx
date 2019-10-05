import React from 'react'
import { MegadraftEditor, editorStateFromRaw } from 'megadraft'
import 'megadraft/dist/css/megadraft.css'

import './../../assets/style/editor.sass'

class NoteEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null) };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  }

  render () {
    return (
      <div className="note-editor">
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}/>
      </div>
    )
  }
}

export default NoteEditor
