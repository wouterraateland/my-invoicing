import { useState, useEffect } from "react"
import useStore from "./useStore"
import _ from "utils"

const useInvoices = () => {
  const [invoices, setInvoices] = useState([])
  const { state, write } = useStore(
    _.localStorageStoreCreator({
      name: "my-invoicing/invoices",
      initialState: { invoiceIds: [] }
    })
  )

  useEffect(() => {
    setInvoices(state.invoiceIds.map(id => ({ loaded: false, id })))
    state.invoiceIds.map(async id => {
      const newInvoice = JSON.parse(
        await _.asyncLocalStorage.getItem(`my-invoicing/invoices/${id}`)
      )
      setInvoices(invoices =>
        invoices.map(
          invoice =>
            invoice.id === id
              ? { ...newInvoice, ...invoice, loaded: true }
              : invoice
        )
      )
    })
  }, [])

  async function addInvoice() {
    const id = Date.now()

    write("invoiceIds", invoiceIds => [...invoiceIds, id])
    setInvoices(invoices => [...invoices, { id, loaded: false }])
    return id
  }

  return {
    invoices,
    addInvoice
  }
}

export default useInvoices
