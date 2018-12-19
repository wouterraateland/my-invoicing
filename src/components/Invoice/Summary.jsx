import React, { useContext } from 'react'

import InvoiceContext from 'contexts/Invoice'

import Currency from 'components/Currency'

const Summary = () => {
  const { state } = useContext(InvoiceContext)

  const subTotal = state.invoiceLines.reduce(
    (acc, { amount, quantity }) => acc + amount * quantity, 0)

  return (
    <div id="sum">
      <span className="subject">Subtotaal</span>
      <Currency amount={subTotal} /><br />
      <span className="subject">BTW (21%)</span>
      <Currency amount={subTotal * .21} /><br />
      <hr />
      <span className="subject">Totaal</span>
      <Currency amount={subTotal * 1.21} /><br />
    </div>
  )
}

export default Summary
