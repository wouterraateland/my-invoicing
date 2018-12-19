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

  box-shadow: 0 .5em 1.5em -.5em #0008;

  text-align: center;
  line-height: 5em;

  background-color: #444;
  color: #fff;

  transition:
    box-shadow .2s ease-out,
    transform .2s ease-out,
    background-color .2s ease-out;

  &:hover {
    box-shadow: 0 1em 3em -.5em #0006;
    background-color: #333;
    transform: translate(0, -.125em);
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
