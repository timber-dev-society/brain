import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Page from './page'
import Navbar from './navbar'
import Pomodoro from './pomodoro'


const App = () => (
  <Container>
    <Row>
      <Col xs="3" sm="2" md="1">
        <Navbar />
      </Col>
      <Col xs="9" sm="10" md="11" style={{ backgroundColor: 'black', color: 'white', height: '96vh', borderRadius: '10px' }}>
        <Page />
      </Col>
    </Row>
    <Pomodoro />
  </Container>
)

export default App
