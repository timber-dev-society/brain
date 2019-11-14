import React, { Component, createRef } from 'react'
import { handleKey } from './handle-keys'
import cns from 'classnames'

class CtrlP extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.state = { input: '', project: 'inbox', editing: false, visible: false }
  }

  focus() {
    this.input.current.focus();
  }

  updateInput = (value) => {
    this.setState({ input: value })
  }

  handleKeyDown = (event) => handleKey(event, this)

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    return (
      <div className={cns('ctrl-p container', {visible: this.state.visible})}>
        <input
          className="input"
          onChange={e => this.updateInput(e.target.value)}
          placeholder='What next'
          value={this.state.input}
          ref={this.input}
        />
        <div className="project">@{this.state.project}</div>
      </div>
    )
  }
}

export default CtrlP
