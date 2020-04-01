import React, { useContext } from "react";
import moment from "moment";
import styled from "styled-components";

import InvoiceContext from "contexts/Invoice";

import Editable from "components/Editable";
import Label from "./Label";

const StrongEditable = styled(Editable)`
  font-weight: 600;
`;

const InvoiceMeta = () => {
  const { read, write } = useContext(InvoiceContext);

  return (
    <>
      <StrongEditable
        value={read`to.company`}
        onChange={v => write(`to.company`, v)}
        placeholder="[Bedrijfsnaam]"
        minWidth={85}
      />
      <br />
      <span>
        Tav{" "}
        <Editable
          value={read`to.name`}
          onChange={v => write(`to.name`, v)}
          placeholder="[Naam]"
          minWidth={41}
        />
      </span>
      <br />
      <Editable
        value={read`to.address`}
        onChange={v => write(`to.address`, v)}
        placeholder="[Adres]"
        minWidth={40}
      />
      <br />
      <Editable
        value={read`to.zipcode`}
        onChange={v => write(`to.zipcode`, v)}
        placeholder="[Postcode]"
        minWidth={57}
      />
      ,{" "}
      <Editable
        value={read`to.city`}
        onChange={v => write(`to.city`, v)}
        placeholder="[Woonplaats]"
        minWidth={72}
      />
      <br />
      <br />
      <strong>FACTUUR</strong>
      <br />
      <Label>Factuurdatum</Label>
      <Editable
        type="date"
        format="dd-mm-yyyy"
        value={moment(read`invoiceDate`).format("YYYY-MM-DD")}
        onChange={v => write(`invoiceDate`, moment(v).unix() * 1000)}
        field="invoiceDate"
        minWidth={120}
      />
      <br />
      <Label>Factuurnummer</Label>
      <Editable
        value={read`reference`}
        onChange={v => write(`reference`, v)}
        placeholder="yyyy.x"
        minWidth={50}
      />
      <br />
      <br />
    </>
  );
};

export default InvoiceMeta;
