import React, { createContext } from "react"
import moment from "moment"

import useStore from "hooks/useStore"

const InvoiceContext = createContext({})

export const InvoiceProvider = ({ invoiceId, invoice, ...rest }) => {
  const value = useStore({
    name: `my-invoicing/invoices/${invoiceId}`,
    initialState: invoice
  })

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
