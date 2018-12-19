import React from 'react'

import { InvoiceProvider } from 'contexts/Invoice'

import Helmet from './Helmet'
import Paper from './Paper'
import Header from './Header'
import Meta from './Meta'
import Table from './Table'
import Summary from './Summary'
import Footer from './Footer'

const App = () => {
  return (
    <InvoiceProvider>
      <Helmet />
  		<Paper>
  			<Header />
        <main>
    			<Meta />
          <Table />
          <br />
          <Summary />
        </main>
        <Footer />
  		</Paper>
    </InvoiceProvider>
  )
}

export default App
