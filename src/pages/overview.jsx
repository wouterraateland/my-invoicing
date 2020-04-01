import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";

import InvoicesContext from "contexts/Invoices";

import { Float } from "components/ui";
import InvoiceThumb from "components/Invoice/Thumb";

const Header = styled.header`
  padding: 1em 2em;

  & h1 {
    text-transform: none;
    margin: 0;
  }
`;

const Main = styled.main`
  padding: 1em;
  margin: 1em;
  border-radius: 0.5em;

  background-color: #fff;
`;

const OverviewPage = () => {
  const [invoices, { createInvoice }] = useContext(InvoicesContext);

  const onCreateInvoice = useCallback(async () => {
    const id = await createInvoice();
    navigate(`/invoice/${id}`);
  }, [createInvoice]);

  return (
    <>
      <Header>
        <h1>My Invoicing</h1>
      </Header>
      <Main>
        <Float.Left>
          <h2>Invoices</h2>
        </Float.Left>
        <Float.Right>
          <button onClick={onCreateInvoice}>Create invoice</button>
        </Float.Right>
        <hr />
        {invoices.map(invoice => (
          <InvoiceThumb key={invoice.id} invoice={invoice} />
        ))}
      </Main>
    </>
  );
};

export default OverviewPage;
