import React from 'react'
import { connect } from 'react-redux'
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'megadraft/dist/css/megadraft.css'

import { editNote } from './../../actions/app-action'

class NoteEditor extends React.Component {
  constructor(props) {
      super(props);
      this.state = {editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
      this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    handleKeyCommand(command, editorState) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return 'handled';
      }
      return 'not-handled';
    }
    render() {
      return (
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
        />
      );
    }
}

export default NoteEditor
/* connect(
  state => ({ note: state.app.note}),
  { editNote }
)(Editor) */
