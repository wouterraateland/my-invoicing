import React, { useCallback, useContext } from "react";
import styled from "styled-components";

import ProfileContext from "contexts/Profile";

import Button from "components/Button";

const InfoButton = styled(Button)`
  position: fixed;
  right: 1em;
  bottom: 1em;

  border-radius: 100%;
  width: 1.5em;

  @media print {
    display: none;
  }
`;

export default () => {
  const { write } = useContext(ProfileContext);

  const onClick = useCallback(() => {
    write("step", 0);
  }, [write]);

  return (
    <InfoButton onClick={onClick}>
      <em>i</em>
    </InfoButton>
  );
};
