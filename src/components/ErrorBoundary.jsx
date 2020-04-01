import React, { Component } from "react";
import styled from "styled-components";

const Error = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  padding: 2em;
  background-color: #f12;
  color: #fff;
`;

class ErrorBoundary extends Component {
  state = {
    error: false
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.log(info);
  }

  render() {
    return this.state.error ? (
      <Error>
        <h1>Something went wrong...</h1>
        <p>{JSON.stringify(this.state.error)}</p>
      </Error>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
