import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Input = styled.input``;

const setWidth = (ref, minWidth) => {
  const input = ref.current;
  if (input) {
    input.style.width = "0px";
    (() => input.offsetWidth)();
    input.style.width = `${Math.max(minWidth, input.scrollWidth)}px`;
  }
};

const Editable = ({ value, onChange, minWidth, ...props }) => {
  const ref = useRef(null);
  useLayoutEffect(() => setWidth(ref, minWidth), [value, minWidth]);

  return (
    <Input
      ref={ref}
      value={value || ""}
      onChange={event => onChange(event.target.value)}
      {...props}
    />
  );
};

export default Editable;
