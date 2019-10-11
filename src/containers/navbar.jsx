import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, NavLink } from 'reactstrap';

import pages from './../pages/'
import { changePage } from './../actions/app-action'
import './../assets/style/navbar.sass'

const Navbar = ({ current, changePage }) => (
  <Nav className="navbrain" vertical>
    { pages.map((page) => (
      <NavItem>
        <NavLink className={`navbar-link${'#'+page.path === current ? ' active' : ''}`}
                key={page.path}
                onClick={() => changePage(page.path)}>
          <page.link />
        </NavLink>
      </NavItem>
    )) }
  </Nav>
)

export default connect(
  state => ({ current: state.app.page }),
  { changePage }
)(Navbar)
