import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
// import 'meyer-reset-scss/reset.scss'
import './assets/style/index.sass'
import App from './containers/app'

import * as sw from './service-worker'

ReactDOM.render(
  <div className="animated-background">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('app')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
sw.unregister()
