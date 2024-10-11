import { createGlobalStyle } from "styled-components";

import "@fontsource/dela-gothic-one";
import "@fontsource/lora";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Dela Gothic One";
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Lora";
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;
