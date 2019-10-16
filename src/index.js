import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import './assets/style/index.sass'
import App from './containers/app'

import * as sw from './service-worker'

const root = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
root.classList.add('animated-background')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
sw.unregister()
