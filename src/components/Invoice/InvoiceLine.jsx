import React from "react";
import styled from "styled-components";

import Editable from "components/Editable";
import Currency from "components/Currency";

const CurrencyInput = styled.span`
  &:focus {
    outline: 1px solid blue;
  }
`;

const formatCurrency = v =>
  v ? `€ ${v.toFixed(2).replace(".", ",")}` : "€ 0,00";

const updateCurrency = (amount, key) =>
  key === "Backspace"
    ? Math.round(amount * 10) / 100
    : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(key)
    ? amount * 10 + 0.01 * Number(key)
    : amount;

const InvoiceLine = ({ line, onChange }) => (
  <tr>
    <td>
      <Editable
        placeholder="[Omschrijving]"
        minWidth={100}
        value={line.description}
        onChange={v => onChange(line => ({ ...line, description: v }))}
      />
    </td>
    <td>
      <Editable
        placeholder="0"
        minWidth={40}
        type="number"
        value={line.quantity}
        onChange={v => onChange(line => ({ ...line, quantity: Number(v) }))}
      />
    </td>
    <td>
      <CurrencyInput
        tabIndex="0"
        onKeyDown={({ key }) =>
          onChange(line => ({
            ...line,
            amount: updateCurrency(line.amount, key)
          }))
        }
      >
        {formatCurrency(line.amount)}
      </CurrencyInput>
    </td>
    <td>
      <Currency amount={line.quantity * line.amount} />
    </td>
  </tr>
);

export default InvoiceLine;
