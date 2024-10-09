import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import { theme } from "../utils/theme";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../utils/globalStyles";
import GlobalFonts from "../utils/globalFonts";
import Heyo from "../components/Heyo";
import { HEADER_CONTENT_HEIGHT } from "../components/Header/Content";
import HeyoUnderline from "../components/HeyoUnderline";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
`;

const IndexPage: React.FC<PageProps> = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <GlobalFonts />
    <Header />
    <LandingContainer>
      <Heyo />
      <HeyoUnderline />
    </LandingContainer>
  </ThemeProvider>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
