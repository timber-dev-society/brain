import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import CtrlP from './../components/ctrl-p'

import Page from './page'
import Pomodoro from './pomodoro'


const App = () => (
  <>
    <CtrlP />
    <Container>
      <Row>
        <Col xs="12" md={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}  style={{ height: '96vh' }}>
          <Page />
          <Pomodoro />
        </Col>
      </Row>
    </Container>
  </>
)

export default App
