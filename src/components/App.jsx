import React from 'react'

import ErrorBoundary from 'components/ErrorBoundary'
import Invoice from 'components/Invoice'

const App = () => {
  return (
    <ErrorBoundary>
      <Invoice />
    </ErrorBoundary>
  )
}

export default App
