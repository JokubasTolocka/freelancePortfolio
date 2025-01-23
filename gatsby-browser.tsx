import React from "react";
import { theme } from "./src/utils/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/utils/globalStyles";
import GlobalFonts from "./src/utils/globalFonts";
import GlobalContextProvider from "./src/contexts/GlobalContext/GlobalContextProvider";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    <GlobalContextProvider>{element}</GlobalContextProvider>
  </ThemeProvider>
);
