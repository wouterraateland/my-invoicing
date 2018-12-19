import React, { useContext } from 'react'

import InvoiceContext from 'contexts/Invoice'

import Editable from 'components/Editable'

const Footer = () => {
  const store = useContext(InvoiceContext)

  return (
    <footer>
      <p style={{ clear: 'both' }}><br /></p>
      <p>Graag binnen 30 dagen betalen onder vermelding van factuurnummer <Editable store={store} field="reference" placeholder="yyyy.x" />.</p>
    </footer>
  )
}

export default Footer
