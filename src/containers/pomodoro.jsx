import React, { Component } from 'react'
import moment from 'moment'

import { ReactComponent as TimerIcon } from './../assets/img/timer.svg'

const internals = {
  defaultValue: { minutes: 25, seconds: 0 },
  interval: 1000,
  intervalId: null,
}

class Pomodoro extends Component {

  state = {
    timer: internals.defaultValue,
    duration: moment.duration(internals.defaultValue),
    current: { minutes: 25, seconds: '00' },
    intervalId: null,
  }

  updateTimer = (values) => {
    this.setState({ timer: values, duration: moment.duration(values) })
  }

  resetTimer = () => {
    this.setState({ duration: moment.duration(this.state.timer) })
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 32 && event.ctrlKey) {
      this.toggleTimer()
    }
  }

  toggleTimer = () => {
    if (internals.intervalId === null) {
      return this.start()
    }
    this.stop()
  }

  stop = () => {
    clearInterval(internals.intervalId)
    internals.intervalId = null
  }

  start = () => {
    internals.intervalId = setInterval(() => {
      const duration = moment.duration(this.state.duration.asMilliseconds() - internals.interval, 'milliseconds')
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      if (minutes === 0 && seconds === 0) {
        this.stop()
      }

      this.setState({
        current: { minutes, seconds: seconds < 10 ? '0'+seconds : seconds },
        duration
      })

    }, internals.interval);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    return (
      <div onClick={this.toggleTimer}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '50px',
      }}>
        <TimerIcon style={{ display: 'inline-block', verticalAlign: 'middle' }} width="30px" height="30px" fill="white" />
        <span style={{
          fontWeight: 800,
          fontSize: '25px',
          display: 'inline-block',
          verticalAlign: 'text-top',
          marginLeft: '7px',
        }}>
          {this.state.current.minutes} : {this.state.current.seconds}
        </span>
      </div>
    )
  }
}

export default Pomodoro
