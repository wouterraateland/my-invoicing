import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;

  display: inline-block;

  box-shadow: 0 0.5em 1.5em -0.5em #0008;

  text-align: center;

  background-color: #4a86e8;
  color: #fff;

  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out,
    background-color 0.2s ease-out;

  &:hover {
    box-shadow: 0 1em 3em -0.5em #0006;
    background-color: #1d48e2;
    transform: translate(0, -0.125em);
  }
`;

export default Button;
