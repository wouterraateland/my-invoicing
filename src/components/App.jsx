import React from 'react'
import Helmet from 'react-helmet'

import './scripts'

const App = () => {
  return (
    <>
      <Helmet>
    		<title>yyyy.x</title>
      </Helmet>
  		<article>
  			<header>
  				<img id="logo" src="/logo_full.svg" alt="Wouter Raateland Webdesign" />
  				<div id="info">
  					<h2>Wouter Raateland Webdesign</h2>
  					<strong>Adres</strong>Aan 't Verlaat 33C<br />
  					<strong></strong>2612 XW, Delft<br />
  					<br />
  					<strong>Bel</strong><a href="tel:+31648271371">06 48 27 13 71</a><br />
  					<strong>Mail</strong><a href="mailto:wouterraateland@gmailcom">wouterraateland@gmail.com</a><br />
  					<strong>Bezoek</strong><a href="https://wouterraateland.nl">www.wouterraateland.nl</a><br />
  					<br />
  					<strong>BTW</strong>NL223898405B01<br />
  					<strong>KvK</strong>61435678<br />
  					<strong>IBAN</strong>NL48 RABO 0118 539 108
  				</div>
  			</header>
  			<main>
  				<strong contenteditable tabindex="1">[Bedrijfsnaam]</strong><br />
  				<span>Tav <span contenteditable tabindex="1">[Naam]</span></span><br />
  				<span contenteditable tabindex="1">[Adres]</span><br />
  				<span contenteditable tabindex="1">[Postcode]</span>, <span contenteditable tabindex="1">[Woonplaats]</span><br />
  				<br />
  				<strong>FACTUUR</strong><br />
  				<span class="subject">Factuurdatum</span><span contenteditable tabindex="1" class="date">dd-mm-yyyy</span><br />
  				<span class="subject">Factuurnummer</span><span contenteditable tabindex="1" class="reference">yyyy.x</span><br />
  				<br />
  				<table>
  					<tbody>
  						<tr>
  							<th style={{ width: '8.75cm' }}>Omschrijving</th>
  							<th>Uren</th>
  							<th>Uurtarief</th>
  							<th style={{ width: '2cm' }}>Totaal</th>
  						</tr>
  						<tr>
  							<td contenteditable tabindex="1">[Omschrijving]</td>
  							<td contenteditable tabindex="1" class="hours">&times;</td>
  							<td>&euro;<span contenteditable tabindex="1" class="price">,-</span></td>
  							<td>&euro;<span class="total">,-</span></td>
  						</tr>
  					</tbody>
  				</table>
  				<br />
  				<div id="sum">
  					<span class="subject">Subtotaal</span>&euro;<span id="sSub">,-</span><br />
  					<span class="subject">BTW (21%)</span>&euro;<span id="sBtw">,-</span><br />
  					<hr />
  					<span class="subject">Totaal</span>&euro;<span id="sTotal">,-</span><br />
  				</div>
  				<p style={{ clear: 'both' }}><br /></p>
  				<p>Graag binnen 31 dagen betalen onder vermelding van factuurnummer <span contenteditable tabindex="1" class="reference">yyyy.x</span>.</p>
  			</main>
  		</article>
    </>
  )
}

export default App
