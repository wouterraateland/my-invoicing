import React from "react"

import ErrorBoundary from "components/ErrorBoundary"
import Invoice from "components/Invoice"
import InfoButton from "components/InfoButton"
import Onboarding from "components/Onboarding"

const App = () => {
  return (
    <ErrorBoundary>
      <Invoice />
      <InfoButton />
      <Onboarding />
    </ErrorBoundary>
  )
}

export default App
