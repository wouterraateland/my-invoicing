import React, { useContext } from 'react'
import moment from 'moment'

import InvoiceContext from 'contexts/Invoice'

import Editable from 'components/Editable'

const Main = () => {
  const store = useContext(InvoiceContext)

  return (
    <main>
      <Editable as="strong" store={store} field="to.company" placeholder="[Bedrijfsnaam]" /><br />
      <span>Tav <Editable store={store} field="to.name" placeholder="[Naam]" /></span><br />
      <Editable store={store} field="to.address" placeholder="[Adres]" /><br />
      <Editable store={store} field="to.zipcode" placeholder="[Postcode]" />, <Editable store={store} field="to.city" placeholder="[Woonplaats]" /><br />
      <br />
      <strong>FACTUUR</strong><br />
      <span className="subject">Factuurdatum</span>
      <Editable
        store={store}
        field="invoiceDate"
        format={m => m.format('DD-MM-YYYY')}
        parse={moment}
        placeholder={moment()}
      />
      <br />
      <span className="subject">Factuurnummer</span><Editable store={store} field="reference" placeholder="yyyy.x" /><br />
      <br />
      {/* <table>
        <tbody>
          <tr>
            <th style={{ width: '8.75cm' }}>Omschrijving</th>
            <th>Uren</th>
            <th>Uurtarief</th>
            <th style={{ width: '2cm' }}>Totaal</th>
          </tr>
          <tr>
            <td contentEditable tabIndex="1">[Omschrijving]</td>
            <td contentEditable tabIndex="1" className="hours">&times;</td>
            <td>&euro;<span contentEditable tabIndex="1" className="price">,-</span></td>
            <td>&euro;<span className="total">,-</span></td>
          </tr>
        </tbody>
      </table> */}
      <br />
      <div id="sum">
        <span className="subject">Subtotaal</span>&euro;<span id="sSub">,-</span><br />
        <span className="subject">BTW (21%)</span>&euro;<span id="sBtw">,-</span><br />
        <hr />
        <span className="subject">Totaal</span>&euro;<span id="sTotal">,-</span><br />
      </div>
    </main>
  )
}

export default Main
