import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Page from './page'
import Navbar from './navbar'
import Pomodoro from './pomodoro'


const App = () => (
  <Container>
    <Row>
      { /*<Col xs="3" sm="2" md="1">
        <Navbar />
      </Col>*/ }
      <Col xs="12" md={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}  style={{ height: '96vh' }}>
        <Page />
        <Pomodoro />
      </Col>
    </Row>
  </Container>
)

export default App
