import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import './assets/css/variables.scss'
import 'meyer-reset-scss/reset.scss'
import './assets/css/index.scss'
import App from './containers/app'

import * as sw from './service-worker'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
sw.unregister()
