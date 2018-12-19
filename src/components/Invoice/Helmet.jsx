import React, { useContext } from 'react'
import Helmet from 'react-helmet'

import InvoiceContext from 'contexts/Invoice'

const HelmetWrapper = () => {
  const { read } = useContext(InvoiceContext)

  return (
    <Helmet
      title={read('reference')}
    />
  )
}

export default HelmetWrapper
