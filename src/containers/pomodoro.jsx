import React, { Component } from 'react'
import { Spacebar, Enter } from 'keyboard-key'
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
    current: { minutes: twoDigitsTransform(internals.defaultValue.minutes), seconds: twoDigitsTransform(internals.defaultValue.seconds) },
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

  endTimer = () => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('*Bip Bip Bip*', {
        body: 'Pomodoro timer ends',
        actions: [],
        icon: 'https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQhHQ47YOebkReABkx2gxUWrJIMJ82QhwuenB75u2Zk26UnFVt-qxWVxas&sp=c3e31f214058a4e773fe59e3ca67b520&anticache=564773'
      })
    }
    this.stopTimer()
  }

  startTimer = () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }

    this.setState({ running: true })
    internals.intervalId = setInterval(() => {
      const millis = this.state.duration.asMilliseconds();
      const duration = moment.duration(millis - internals.interval, 'milliseconds')

      if (millis === 0) {
        this.endTimer()
        return
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
    if (event.keyCode === Spacebar && event.ctrlKey) {
      this.toggleTimer()
    }
    if (this.state.editing && event.keyCode === Enter) {
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
          <TimerIcon width="30px" height="30px" fill="black" />
        </div>
        <div className="text">
          <span id="pomodoro-minutes">{this.state.current.minutes}</span>
          :
          <span id="pomodoro-seconds">{this.state.current.seconds}</span>
        </div>
      </div>
    )
  }
}

export default Pomodoro
