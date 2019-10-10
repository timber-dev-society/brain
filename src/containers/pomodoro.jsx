import React, { Component } from 'react'
import moment from 'moment'

import { ReactComponent as TimerIcon } from './../assets/img/timer.svg'
import './../assets/style/pomodoro.sass'

const internals = {
  defaultValue: { minutes: 25, seconds: 0 },
  interval: 1000,
  intervalId: null,
}

const twoDigitsTransform = (value) => {
  return value < 10
       ? '0'.concat(value)
       : String(value)
}

class Pomodoro extends Component {

  state = {
    timer: internals.defaultValue,
    duration: moment.duration(internals.defaultValue),
    current: { minutes: '25', seconds: '00' },
    intervalId: null,
    running: false,
    editing: false,
  }

  updateTimer = (values) => {
    this.setState({ timer: values, duration: moment.duration(values) })
  }

  resetTimer = () => {
    this.setState({ duration: moment.duration(this.state.timer) })
  }

  toggleTimer = () => {
    if (internals.intervalId === null) {
      return this.startTimer()
    }
    this.stopTimer()
  }

  stopTimer = () => {
    clearInterval(internals.intervalId)
    internals.intervalId = null
    this.setState({ running: false })
  }

  startTimer = () => {
    this.setState({ running: true })
    internals.intervalId = setInterval(() => {
      const millis = this.state.duration.asMilliseconds();
      const duration = moment.duration(millis - internals.interval, 'milliseconds')

      if (millis === 0) {
        this.stopTimer()
      }

      this.setState({
        current: {
          minutes: twoDigitsTransform(duration.minutes()),
          seconds: twoDigitsTransform(duration.seconds()),
        },
        duration
      })

    }, internals.interval);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 32 && event.ctrlKey) {
      this.toggleTimer()
    }
    if (this.state.editing && event.keyCode === 13) {
      event.preventDefault();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    return (
      <div className="pomodoro-container">
        <div className="icon" onClick={() => { this.state.duration.asMilliseconds() ? this.toggleTimer() : this.resetTimer() }}>
          <div className={`pomodoro${this.state.running ? ' running' : ''}`}></div>
          <TimerIcon width="30px" height="30px" fill="white" />
        </div>
        <div className="text">
          <span id="pomodoro-minutes" contentEditable={String(!this.state.running)} onFocus={()=>{this.setState({editing: true})}}>{this.state.current.minutes}</span>
          :
          <span id="pomodoro-seconds" contentEditable={String(!this.state.running)}>{this.state.current.seconds}</span>
        </div>
      </div>
    )
  }
}

export default Pomodoro
