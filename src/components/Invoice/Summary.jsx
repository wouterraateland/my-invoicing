import React, { useContext } from "react"
import styled from "styled-components"

import InvoiceContext from "contexts/Invoice"

import Currency from "components/Currency"
import Label from "./Label"

const Sum = styled.div`
  float: right;
  width: 2cm;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`

const Summary = () => {
  const { state } = useContext(InvoiceContext)

  const subTotal = state.invoiceLines.reduce(
    (acc, { amount, quantity }) => acc + amount * quantity,
    0
  )

  return (
    <Sum>
      <Label>Subtotaal</Label>
      <Currency amount={subTotal} />
      <br />
      <Label>BTW (21%)</Label>
      <Currency amount={subTotal * 0.21} />
      <br />
      <hr />
      <Label>Totaal</Label>
      <Currency amount={subTotal * 1.21} />
      <br />
    </Sum>
  )
}

export default Summary
