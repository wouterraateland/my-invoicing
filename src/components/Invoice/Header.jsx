import React, { useContext } from "react"
import styled from "styled-components"

import ProfileContext from "contexts/Profile"

import Editable from "components/Editable"
import HiddenInput from "components/HiddenInput"
import DropZone from "components/DropZone"

import defaultLogo from "assets/default-logo.svg"

const ClickableDropZone = styled(DropZone)`
  cursor: pointer;
`

const Logo = styled.img`
  height: 1.5cm;
`

const Info = styled.div`
  width: 5.5cm;
  float: right;

  strong {
    display: inline-block;
    width: 1.5cm;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Header = () => {
  const store = useContext(ProfileContext)
  const { read, write } = store

  function uploadLogo(file) {
    var reader = new FileReader()

    reader.onloadend = () => {
      write("logo", reader.result)
    }

    reader.readAsDataURL(file)
  }

  function handleInput(event) {
    if (event.target.files.length > 0) {
      uploadLogo(event.target.files[0])
    }
  }

  function handleDrop(event) {
    if (event.dataTransfer.files.length > 0) {
      uploadLogo(event.dataTransfer.files[0])
    }
  }

  return (
    <header>
      <ClickableDropZone as="label" onDrop={handleDrop}>
        <HiddenInput type="file" accept="image/*" onChange={handleInput} />
        <Logo src={read("logo", defaultLogo)} alt={read("name")} />
      </ClickableDropZone>
      <Info>
        <Editable
          as="h2"
          store={store}
          field="name"
          placeholder="[Bedrijfsnaam]"
        />
        <strong>Adres</strong>
        <Editable store={store} field="address" placeholder="[Adres]" />
        <br />
        <strong />
        <Editable
          store={store}
          field="zipcode"
          placeholder="[Postcode]"
        />, <Editable store={store} field="city" placeholder="[Woonplaats]" />
        <br />
        <br />
        <strong>Bel</strong>
        <a href={`tel:${read("phone")}`}>
          <Editable store={store} field="phone" placeholder="[Telefoon]" />
        </a>
        <br />
        <strong>Mail</strong>
        <a href={`mailto:${read("email")}`}>
          <Editable store={store} field="email" placeholder="[E-mail adres]" />
        </a>
        <br />
        <strong>Bezoek</strong>
        <a href={`https://${read("web")}`}>
          <Editable store={store} field="web" placeholder="[Website]" />
        </a>
        <br />
        <br />
        <strong>BTW</strong>
        <Editable store={store} field="vat" placeholder="[BTW nummer]" />
        <br />
        <strong>KvK</strong>
        <Editable store={store} field="kvk" placeholder="[KvK nummer]" />
        <br />
        <strong>IBAN</strong>
        <Editable store={store} field="iban" placeholder="[IBAN nummer]" />
      </Info>
    </header>
  )
}

export default Header
