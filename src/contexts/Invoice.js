import React, { createContext } from "react"
import moment from "moment"

import useStore from "hooks/useStore"

const InvoiceContext = createContext({})

export const InvoiceProvider = ({ invoice, ...rest }) => {
  const value = useStore({ initialState: invoice })

  return <InvoiceContext.Provider value={value} {...rest} />
}

InvoiceProvider.defaultProps = {
  invoice: {
    to: {
      company: null,
      name: null,
      address: null,
      zipcode: null,
      city: null
    },
    invoiceDate: moment(),
    reference: `${moment().format("YYYY")}.x`,
    invoiceLines: [
      {
        description: null,
        quantity: 1,
        amount: null
      }
    ]
  }
}

export default InvoiceContext
