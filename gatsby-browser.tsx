import React from "react";
import { theme } from "./src/utils/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/utils/globalStyles";
import GlobalFonts from "./src/utils/globalFonts";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    {element}
  </ThemeProvider>
);
