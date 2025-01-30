import React from "react";
import { theme } from "./src/utils/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./src/utils/globalStyles";
import GlobalFonts from "./src/utils/globalFonts";

const HeadComponents = [
  <link
    rel="preload"
    href="/fonts/ppneuemontreal-medium.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
    key="neueMontrealFont-medium"
  />,
  <link
    rel="preload"
    href="/fonts/ppneuemontreal-book.otf"
    as="font"
    type="font/otf"
    crossOrigin="anonymous"
    key="neueMontrealFont-book"
  />,
];

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};

export const wrapRootElement = ({ element, setHeadComponents }) => {
  setHeadComponents([]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFonts />
      {element}
    </ThemeProvider>
  );
};
