import React from 'react'
import { connect } from 'react-redux'

import pages from './../pages/'
import { changePage } from './../actions/app-action'
import './../assets/css/navbar.scss'

const Navbar = ({ current, changePage }) => (
  <div className="navbar">
    { pages.map((page) => (
      <button className={`navbar-link${'#'+page.path === current ? ' active' : ''}`}
              key={page.path}
              onClick={() => changePage(page.path)}>
        <page.link />
      </button>
    )) }
  </div>
)

export default connect(
  state => ({ current: state.app.page }),
  { changePage }
)(Navbar)
