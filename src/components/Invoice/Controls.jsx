import React, { useContext } from 'react'
import styled from 'styled-components'

import InvoiceContext from 'contexts/Invoice'

const ControlsWrapper = styled.div`
  position: fixed;
  left: 1em;
  bottom: 1em; right: 1em;

  @media print {
    display: none;
  }

  text-align: center;
`

const Control = styled.button`
  cursor: pointer;

  display: inline-block;
  width: 5em;
  height: 5em;
  margin: 1em;
  border-radius: 100%;

  text-align: center;
  line-height: 5em;

  background-color: #444;
  color: #fff;

  &:hover {
    background-color: #333;
  }
`

const Controls = () => {
  const { write } = useContext(InvoiceContext)

  function addRow() {
    write('invoiceLines', invoiceLines => [
      ...invoiceLines,
      { description: '', quantity: 1, amount: 0 },
    ])
  }

  function print() {
    window.print()
  }

  return (
    <ControlsWrapper>
      <Control onClick={print}>Print</Control>
      <Control onClick={addRow}>+ Rij</Control>
    </ControlsWrapper>
  )
}

export default Controls
