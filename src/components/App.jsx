import React, { useContext } from "react";
import { Router, Redirect } from "@reach/router";

import InvoicesContext from "contexts/Invoices";

import OverviewPage from "pages/overview";
import InvoicePage from "pages/invoice";

const App = () => {
  const [invoices] = useContext(InvoicesContext);

  return (
    <Router>
      <InvoicePage path="/" />
      <OverviewPage path="/invoices" />
      {invoices.map(({ id }) => (
        <InvoicePage key={id} path={`/invoice/${id}`} />
      ))}
      <Redirect to="/invoices" from="/invoice" default noThrow />
    </Router>
  );
};

export default App;
