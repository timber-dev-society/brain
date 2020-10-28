import React from 'react'
import { connect } from 'react-redux'

import pages from './../pages/'

const Page = ({ path }) => (
  <>
    { pages.filter(page => ('#' + page.path) === path).map(page => (<page.page key={page.path} />)) }
  </>
)

export default connect(
  state => ({ path: state.app.page })
)(Page)
