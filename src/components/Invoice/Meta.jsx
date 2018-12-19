import React, { useContext } from 'react'
import moment from 'moment'

import InvoiceContext from 'contexts/Invoice'

import Editable from 'components/Editable'
import Label from './Label'

const InvoiceMeta = () => {
  const store = useContext(InvoiceContext)

  return (
    <>
      <Editable as="strong" store={store} field="to.company" placeholder="[Bedrijfsnaam]" /><br />
      <span>Tav <Editable store={store} field="to.name" placeholder="[Naam]" /></span><br />
      <Editable store={store} field="to.address" placeholder="[Adres]" /><br />
      <Editable store={store} field="to.zipcode" placeholder="[Postcode]" />, <Editable store={store} field="to.city" placeholder="[Woonplaats]" /><br />
      <br />
      <strong>FACTUUR</strong><br />
      <Label>Factuurdatum</Label>
      <Editable
        store={store}
        field="invoiceDate"
        format={m => m.format('DD-MM-YYYY')}
        parse={moment}
        placeholder={moment()}
      />
      <br />
      <Label>Factuurnummer</Label><Editable store={store} field="reference" placeholder="yyyy.x" /><br />
      <br />
    </>
  )
}

export default InvoiceMeta
