import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import { theme } from "../utils/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../utils/globalStyles";
import GlobalFonts from "../utils/globalFonts";
import App from "../modules/App";

const IndexPage: React.FC<PageProps> = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    <Header />
    <App />
  </ThemeProvider>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
