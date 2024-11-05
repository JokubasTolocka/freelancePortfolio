import { createGlobalStyle } from "styled-components";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;
