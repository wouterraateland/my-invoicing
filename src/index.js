import React from "react"
import { render, hydrate } from "react-dom"
import "./styles.css"
import * as serviceWorker from "./serviceWorker"

import { ProfileProvider } from "contexts/Profile"
import { InvoicesProvider } from "contexts/Invoices"

import App from "components/App"

const Root = (
  <ProfileProvider>
    <InvoicesProvider>
      <App />
    </InvoicesProvider>
  </ProfileProvider>
)

const root = document.getElementById("app-root")

if (root.hasChildNodes()) {
  hydrate(Root, root)
} else {
  render(Root, root)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
