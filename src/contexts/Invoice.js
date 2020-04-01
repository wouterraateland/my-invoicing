import React, { createContext, useMemo } from "react";
import moment from "moment";

import useStore from "hooks/useStore";

const InvoiceContext = createContext({});

export const InvoiceProvider = ({ invoiceId, invoice, ...rest }) => {
  const storeConfig = useMemo(
    () => ({
      name: `my-invoicing/invoices/${invoiceId}`,
      initialState: invoice
    }),
    [invoiceId, invoice]
  );
  const value = useStore(storeConfig);

  return <InvoiceContext.Provider value={value} {...rest} />;
};

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
};

export default InvoiceContext;
