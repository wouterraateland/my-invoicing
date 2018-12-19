import React, { useContext } from 'react'

import ProfileContext from 'contexts/Profile'

import Editable from 'components/Editable'

const Header = () => {
  const store = useContext(ProfileContext)
  const { read } = store

  return (
    <header>
      <img id="logo" src="/logo_full.svg" alt="Wouter Raateland Webdesign" />
      <div id="info">
        <Editable as="h2" store={store} field="name" placeholder="[Bedrijfsnaam]" />
        <strong>Adres</strong><Editable store={store} field="address" placeholder="[Adres]" /><br />
        <strong></strong><Editable store={store} field="zipcode" placeholder="[Postcode]" />, <Editable store={store} field="city" placeholder="[Woonplaats]" /><br />
        <br />
        <strong>Bel</strong><a href={`tel:${read('phone')}`}><Editable store={store} field="phone" placeholder="[Telefoon]" /></a><br />
        <strong>Mail</strong><a href={`mailto:${read('email')}`}><Editable store={store} field="email" placeholder="[E-mail adres]" /></a><br />
        <strong>Bezoek</strong><a href={`https://${read('web')}`}><Editable store={store} field="web" placeholder="[Website]" /></a><br />
        <br />
        <strong>BTW</strong><Editable store={store} field="vat" placeholder="[BTW nummer]" /><br />
        <strong>KvK</strong><Editable store={store} field="kvk" placeholder="[KvK nummer]" /><br />
        <strong>IBAN</strong><Editable store={store} field="iban" placeholder="[IBAN nummer]" />
      </div>
    </header>
  )
}

export default Header
