import { createGlobalStyle } from "styled-components";
import { responsive } from "./breakpoints";
import * as vars from './variables.styles';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;

    ${responsive.lp`
      font-size: 55%;
    `}

    ${responsive.tb`
      font-size: 45%;
    `}
  }

  body {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    background-color: ${vars.clrBase};
    color: ${vars.clrFont};
  }
`