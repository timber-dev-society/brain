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
    current: { minutes: 25, seconds: 0 },
    intervalId: null,
  }

  updateTimer = (values) => {
    this.setState({ timer: values, duration: moment.duration(values) })
  }

  resetTimer = () => {
    this.setState({ duration: moment.duration(this.state.timer) })
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
        current: { minutes, seconds },
        duration
      })

    }, internals.interval);
  }

  render() {
    return (
      <div onClick={() => {
        if (internals.intervalId === null) {
          return this.start()
        }
        this.stop()
      }}>
        <TimerIcon />
        <span>
          {this.state.current.minutes} : {this.state.current.seconds}
        </span>
      </div>
    )
  }
}

export default Pomodoro
