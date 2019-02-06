import React, { createContext } from "react"

import useInvoices from "hooks/useInvoices"

const InvoicesContext = createContext({})

export const InvoicesProvider = props => {
  const value = useInvoices()

  return <InvoicesContext.Provider value={value} {...props} />
}

export default InvoicesContext
