import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../components/Header";
import Heyo from "../components/Heyo";
import LandingText from "../modules/LandingText";
import AboutSection from "../modules/AboutSection/AboutSection";
import WorkSection from "../modules/WorkSection/WorkSection";
import SectionWrapper from "../components/SectionWrapper";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Header />
    <LandingContainer>
      <Heyo />
      <LandingText />
    </LandingContainer>
    <SectionWrapper
      titles={["About"]}
      squiggleColors={["green"]}
      isVerticallyCentered
    >
      <AboutSection />
    </SectionWrapper>
    <SectionWrapper titles={["Work"]} squiggleColors={["blue"]}>
      <WorkSection />
    </SectionWrapper>
    <SectionWrapper
      titles={["Experience", "Certifications"]}
      squiggleColors={["yellow", "green"]}
    >
      {/* <WorkSection /> */}
    </SectionWrapper>
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
