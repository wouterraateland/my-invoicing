import React from 'react'
import { render } from 'react-dom'
import './styles.css'
import * as serviceWorker from './serviceWorker'

import App from 'components/App'

const Root = (
  <App />
)

const root = document.getElementById('root')

render(Root, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
