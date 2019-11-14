import React, { Component, createRef } from 'react'
import { init, handleKey, handleChange } from './handle-keys'
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

  componentDidMount() {
    init(this)
    document.addEventListener("keydown", handleKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", handleKey, false);
  }

  render() {
    return (
      <div className={cns('ctrl-p container', {visible: this.state.visible})}>
        <input
          className="input"
          onChange={e => handleChange(e.target.value)}
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
