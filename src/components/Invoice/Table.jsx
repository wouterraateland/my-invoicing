import React, { useCallback, useContext } from "react";
import InvoiceContext from "contexts/Invoice";

import InvoiceLine from "./InvoiceLine";

const Table = () => {
  const { read, write } = useContext(InvoiceContext);

  const onChangeLine = useCallback(
    (i, v) =>
      write("invoiceLines", invoiceLines =>
        invoiceLines.map((line, j) =>
          i === j ? (typeof v === "function" ? v(line) : v) : line
        )
      ),
    [write]
  );

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "8.75cm" }}>Omschrijving</th>
          <th>Aantal</th>
          <th>Per stuk</th>
          <th style={{ width: "2cm" }}>Totaal</th>
        </tr>
      </thead>
      <tbody>
        {read("invoiceLines").map((line, i) => (
          <InvoiceLine key={i} line={line} onChange={v => onChangeLine(i, v)} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
