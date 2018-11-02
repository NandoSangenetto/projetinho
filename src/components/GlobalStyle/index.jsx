import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.background ? props.background : "#000")};
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
