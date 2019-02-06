import React, { useContext } from "react"
import merge from "deepmerge"
import ContentEditable from "react-simple-contenteditable"

import { noop, replace } from "utils/functions"

import InvoiceContext from "contexts/Invoice"

import Currency, { currencyFormatter } from "components/Currency"

const InvoiceLine = ({ description, quantity, amount, write }) => {
  return (
    <tr>
      <ContentEditable
        tabIndex={1}
        onKeyPress={noop}
        tagName="td"
        html={description || "[Omschrijving]"}
        onChange={(_, description) => write({ description })}
      />
      <ContentEditable
        tabIndex={1}
        onKeyPress={noop}
        tagName="td"
        html={quantity}
        onChange={(_, quantity) =>
          write({
            quantity: parseInt(quantity, 10)
          })
        }
      />
      <ContentEditable
        tabIndex={1}
        onKeyPress={noop}
        tagName="td"
        html={currencyFormatter.format(amount)}
        onChange={(_, amount) =>
          write({
            amount: parseFloat(
              amount.replace(/[^0-9.,-]+/g, "").replace(",", ".")
            )
          })
        }
      />
      <td>
        <Currency amount={quantity * amount} />
      </td>
    </tr>
  )
}

const Table = () => {
  const { state, write } = useContext(InvoiceContext)

  const writeLine = (i, newValue) =>
    write("invoiceLines", invoiceLines =>
      replace(invoiceLines, i, merge(invoiceLines[i], newValue))
    )

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
        {state.invoiceLines.map((invoiceLine, i) => (
          <InvoiceLine
            key={i}
            write={newValue => writeLine(i, newValue)}
            {...invoiceLine}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
