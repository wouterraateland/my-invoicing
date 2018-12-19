import React from 'react'

import './scripts'

import { InvoiceProvider } from 'contexts/Invoice'

import ErrorBoundary from 'components/ErrorBoundary'
import Helmet from 'components/Helmet'
import Paper from 'components/Paper'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

const App = () => {
  return (
    <ErrorBoundary>
      <InvoiceProvider>
        <Helmet />
    		<Paper>
    			<Header />
    			<Main />
          <Footer />
    		</Paper>
      </InvoiceProvider>
    </ErrorBoundary>
  )
}

export default App
