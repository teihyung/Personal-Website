import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0; /* ← Kills the 8px */
    padding: 0;
    font-family: "Barlow Condensed", sans-serif;
    background: ${props => props.theme.colors.bg};
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
  }
`;

export default GlobalStyle;