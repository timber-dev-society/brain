import React from 'react'
// import { connect } from 'react-redux'
import {MegadraftEditor, editorStateFromRaw} from 'megadraft'
import 'megadraft/dist/css/megadraft.css'

import { editNote } from './../../actions/app-action'
import './../../assets/style/editor.scss'

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: editorStateFromRaw(null)};
  }

  onChange = (editorState) => {
    this.setState({editorState});
  }

  render() {
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
/* connect(
  state => ({ note: state.app.note}),
  { editNote }
)(Editor) */
