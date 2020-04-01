import React, { useContext, useState, useEffect } from "react";
import styled, { css } from "styled-components";

import ProfileContext from "contexts/Profile";

import Modal from "components/Modal";

// 'Hi there, thanks for checking out My Invoicing. The simplest free online invoicing application. Click anywhere to continue.'
// 'You can fill in your information in by just typing in the fields. Your profile will be saved across all your invoices.'
// 'When you fill in the price and quantity, the totals are automatically calculated.'
// 'Add an invoice line by clicking here.'
// 'That\'s All for now! Enjoy creating your invoices 😄'

const stepDescriptions = [
  "Hallo daar, leuk dat je My Invoicing gebruikt. De meest eenvoudige gratis online facturatie-applicatie. Klik ergens om door te gaan.",
  "Je kan alle gegevens invullen door in de velden te typen. Je profiel wordt opgeslagen voor al je facturen.",
  "Wanneer je de prijs en hoeveelheid invult, wordt het totaal automatisch berekend.",
  "Voeg een factuurregel toe door hier te klikken.",
  "Dat is het voor nu! Veel plezier met het maken van jouw facturen 😄"
];

const steps = [
  {
    description: stepDescriptions[0],
    left: "50%",
    top: "50%",
    size: "1em",
    position: "below"
  },
  {
    description: stepDescriptions[1],
    left: "calc(50% + 18em)",
    top: "calc(50% - 15em)",
    size: "20em",
    position: "left"
  },
  {
    description: stepDescriptions[2],
    left: "calc(50% + 15em)",
    top: "calc(50% + 3em)",
    size: "16em",
    position: "left"
  },
  {
    description: stepDescriptions[3],
    left: "calc(50% + 3.5em)",
    top: "calc(100% - 4.5em)",
    size: "8em",
    position: "above"
  },
  {
    description: stepDescriptions[4],
    left: "50%",
    top: "50%",
    size: "1em",
    position: "below"
  }
];

const Onboarding = styled.div.attrs(({ step }) => ({
  style: {
    left: step.left,
    top: step.top,

    width: step.size,
    height: step.size
  }
}))`
  position: fixed;
  border-radius: 100%;
  box-shadow: 0 0 0 100vmax #000a;

  transition-property: left, top, width, height;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;

  transform: translate(-50%, -50%);

  &::before {
    content: "";

    position: absolute;
    left: -100vmax;
    top: -100vmax;
    right: -100vmax;
    bottom: -100vmax;
  }
`;

const Explanation = styled.p`
  position: absolute;

  ${props => {
    switch (props.position) {
      case "left":
        return css`
          right: 100%;
          top: 50%;
          transform: translate(0, -50%);
        `;
      case "above":
        return css`
          bottom: 100%;
          left: 50%;
          transform: translate(-50%, 0);
        `;
      case "right":
        return css`
          left: 100%;
          top: 50%;
          transform: translate(0, -50%);
        `;
      default:
        return css`
          top: 100%;
          left: 50%;
          transform: translate(-50%, 0);
        `;
    }
  }} width: 30vw;
  max-width: 30em;
  padding: 1em;

  color: #fff;
`;

export default () => {
  const [el, setEl] = useState(null);
  const { read, write } = useContext(ProfileContext);

  useEffect(() => {
    setEl(document.createElement("div"));
  }, []);

  const step = steps[read("step", 0)];

  function next() {
    write("step", step => (step ? step + 1 : 1));
  }

  return el ? (
    <Modal el={el}>
      {step ? (
        <Onboarding step={step} onClick={next}>
          <Explanation position={step.position}>{step.description}</Explanation>
        </Onboarding>
      ) : null}
    </Modal>
  ) : null;
};
