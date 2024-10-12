import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../components/Header/Content";
import Heyo from "../components/Heyo";
import LandingText from "../modules/LandingText";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
`;

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Header />
    <LandingContainer>
      <Heyo />
      <LandingText />
    </LandingContainer>
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
