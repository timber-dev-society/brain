import React from 'react'
//import './../assets/css/app.css'
import 'semantic-ui-css/semantic.min.css'

import Page from './page'
import Navbar from './navbar'

const App = () => (
  <div className="container" style={{ backgroundColor: 'black', color: 'white', padding: '2% 10% 5%' }}>
    <Navbar />
    <Page />
  </div>
)

export default App
