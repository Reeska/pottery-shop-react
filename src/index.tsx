import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { defineCustomElements, applyPolyfills } from '@pottery-ui/core/loader'

import * as serviceWorker from './serviceWorker'
import './index.css'
import App from './App/App'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App/>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

applyPolyfills().then(() => defineCustomElements(window))
