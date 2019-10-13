import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Page from './page'
import Navbar from './navbar'
import Pomodoro from './pomodoro'


const App = () => (
  <Container style={{ backgroundColor: 'black', color: 'white', padding: '2% 10% 5%' }}>
    <Row>
      <Col xs="3">
        <Navbar />
      </Col>
      <Col xs="9">
        <Page />
      </Col>
    </Row>
    <Pomodoro />
  </Container>
)

export default App
