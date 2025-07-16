import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'PP Neue Montreal';
  font-weight: 500;
  font-display: swap;
  font-style: normal;
  src: url(/fonts/ppneuemontreal-medium.otf) format("opentype");
}
  @font-face {
  font-family: 'PP Neue Montreal';
  font-weight: 400;
  font-display: swap;
  font-style: normal;
   src: url(/fonts/ppneuemontreal-book.otf) format("opentype");
}
`;

export default GlobalFonts;
