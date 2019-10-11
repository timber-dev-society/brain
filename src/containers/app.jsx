import React from 'react'

import Page from './page'
import Navbar from './navbar'
import Pomodoro from './pomodoro'

const App = () => (
  <div className="container" style={{ backgroundColor: 'black', color: 'white', padding: '2% 10% 5%' }}>
    <Navbar />
    <Page />
    <Pomodoro />
  </div>
)

export default App
