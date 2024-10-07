import { createGlobalStyle } from "styled-components";

import "@fontsource/dela-gothic-one";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Dela Gothic One";
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;
