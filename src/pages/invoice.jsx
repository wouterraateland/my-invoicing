import React from "react";
import styled from "styled-components";

import ErrorBoundary from "components/ErrorBoundary";
import Invoice from "components/Invoice";
import InfoButton from "components/InfoButton";
import Onboarding from "components/Onboarding";

const Page = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-color: #555;
`;

const InvoicePage = ({ invoiceId }) => {
  return (
    <Page>
      <ErrorBoundary>
        <Invoice id={invoiceId} />
        <InfoButton />
        <Onboarding for="editor" />
      </ErrorBoundary>
    </Page>
  );
};

export default InvoicePage;
