import { useCallback, useEffect, useState } from "react";
import useStore from "./useStore";
import _ from "utils";

const storeConfig = _.localStorageStoreCreator({
  name: "my-invoicing/invoices",
  initialState: { invoiceIds: [] }
});

const useInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const { state, write } = useStore(storeConfig);

  useEffect(() => {
    setInvoices(state.invoiceIds.map(id => ({ loaded: false, id })));
    state.invoiceIds.map(async id => {
      const newInvoice = JSON.parse(
        await _.asyncLocalStorage.getItem(`my-invoicing/invoices/${id}`)
      );
      setInvoices(invoices =>
        invoices.map(invoice =>
          invoice.id === id
            ? { ...newInvoice, ...invoice, loaded: true }
            : invoice
        )
      );
    });
  }, [state.invoiceIds]);

  const createInvoice = useCallback(async () => {
    const id = Date.now();

    write("invoiceIds", invoiceIds => [...invoiceIds, id]);
    setInvoices(invoices => [...invoices, { id, loaded: false }]);
    return id;
  }, [write]);

  return [invoices, { createInvoice }];
};

export default useInvoices;
