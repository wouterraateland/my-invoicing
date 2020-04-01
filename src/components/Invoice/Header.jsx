import React, { useCallback, useContext } from "react";
import styled from "styled-components";

import ProfileContext from "contexts/Profile";

import Editable from "components/Editable";
import HiddenInput from "components/HiddenInput";
import DropZone from "components/DropZone";

import defaultLogo from "assets/default-logo.svg";

const ClickableDropZone = styled(DropZone)`
  cursor: pointer;
`;

const Logo = styled.img`
  height: 1.5cm;
`;

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
`;

const H2Editable = styled(Editable)`
  display: block;
  font-weight: 600;
`;

const Header = () => {
  const store = useContext(ProfileContext);
  const { read, write } = store;

  const uploadLogo = useCallback(
    file => {
      var reader = new FileReader();

      reader.onloadend = () => {
        write("logo", reader.result);
      };

      reader.readAsDataURL(file);
    },
    [write]
  );

  const handleInput = useCallback(
    event => {
      if (event.target.files.length > 0) {
        uploadLogo(event.target.files[0]);
      }
    },
    [uploadLogo]
  );

  const handleDrop = useCallback(
    event => {
      if (event.dataTransfer.files.length > 0) {
        uploadLogo(event.dataTransfer.files[0]);
      }
    },
    [uploadLogo]
  );

  return (
    <header>
      <ClickableDropZone as="label" onDrop={handleDrop}>
        <HiddenInput type="file" accept="image/*" onChange={handleInput} />
        <Logo src={read("logo", defaultLogo)} alt={read`name`} />
      </ClickableDropZone>
      <Info>
        <H2Editable
          value={read`name`}
          onChange={v => write("name", v)}
          placeholder="[Bedrijfsnaam]"
          minWidth={100}
        />
        <strong>Adres</strong>
        <Editable
          value={read`address`}
          onChange={v => write("address", v)}
          placeholder="[Adres]"
          minWidth={40}
        />
        <br />
        <strong />
        <Editable
          value={read`zipcode`}
          onChange={v => write("zipcode", v)}
          placeholder="[Postcode]"
          minWidth={57}
        />
        ,{" "}
        <Editable
          value={read`city`}
          onChange={v => write("city", v)}
          placeholder="[Woonplaats]"
          minWidth={72}
        />
        <br />
        <br />
        <strong>Bel</strong>
        <a href={`tel:${read`phone`}`}>
          <Editable
            value={read`phone`}
            onChange={v => write("phone", v)}
            placeholder="[Telefoon]"
            minWidth={100}
          />
        </a>
        <br />
        <strong>Mail</strong>
        <a href={`mailto:${read`email`}`}>
          <Editable
            value={read`email`}
            onChange={v => write("email", v)}
            placeholder="[E-mail adres]"
            minWidth={100}
          />
        </a>
        <br />
        <strong>Bezoek</strong>
        <a href={`https://${read`web`}`}>
          <Editable
            value={read`web`}
            onChange={v => write("web", v)}
            placeholder="[Website]"
            minWidth={100}
          />
        </a>
        <br />
        <br />
        <strong>BTW</strong>
        <Editable
          value={read`vat`}
          onChange={v => write("vat", v)}
          placeholder="[BTW nummer]"
          minWidth={100}
        />
        <br />
        <strong>KvK</strong>
        <Editable
          value={read`kvk`}
          onChange={v => write("kvk", v)}
          placeholder="[KvK nummer]"
          minWidth={100}
        />
        <br />
        <strong>IBAN</strong>
        <Editable
          value={read`iban`}
          onChange={v => write("iban", v)}
          placeholder="[IBAN nummer]"
          minWidth={100}
        />
      </Info>
    </header>
  );
};

export default Header;
