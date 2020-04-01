import React, { useCallback, useContext } from "react";
import styled from "styled-components";

import InvoiceContext from "contexts/Invoice";

import Button from "components/Button";

const ControlsWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  left: 1em;
  bottom: 1em;
  right: 1em;

  @media print {
    display: none;
  }

  text-align: center;
`;

const Control = styled(Button)`
  pointer-events: auto;

  width: 5em;
  height: 5em;
  margin: 1em;
  border-radius: 100%;

  line-height: 5em;
`;

const Controls = () => {
  const { write } = useContext(InvoiceContext);

  const addRow = useCallback(
    () =>
      write("invoiceLines", invoiceLines => [
        ...invoiceLines,
        { description: "", quantity: 1, amount: 0 }
      ]),
    [write]
  );

  const print = useCallback(() => window.print(), []);

  return (
    <ControlsWrapper>
      <Control onClick={print}>Print</Control>
      <Control onClick={addRow}>+ Rij</Control>
    </ControlsWrapper>
  );
};

export default Controls;
