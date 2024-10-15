import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../components/Header";
import Heyo from "../components/Heyo";
import LandingText from "../modules/LandingText";
import AboutSection from "../modules/AboutSection/AboutSection";
import Container from "../components/Container";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 675px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Header />
    <LandingContainer>
      <Heyo />
      <LandingText />
    </LandingContainer>
    <AboutContainer>
      <Container>
        <AboutSection />
      </Container>
    </AboutContainer>
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
