import React, { useContext } from "react";
import styled from "styled-components";

import InvoiceContext from "contexts/Invoice";

import Editable from "components/Editable";

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  padding: 1cm;

  text-align: center;
`;

const Footer = () => {
  const { read, write } = useContext(InvoiceContext);

  return (
    <StyledFooter>
      <p style={{ clear: "both" }}>
        <br />
      </p>
      <p>
        Graag binnen 30 dagen betalen onder vermelding van factuurnummer{" "}
        <Editable
          value={read`reference`}
          onChange={v => write("reference", v)}
          placeholder="yyyy.x"
          minWidth={80}
        />
        .
      </p>
    </StyledFooter>
  );
};

export default Footer;
