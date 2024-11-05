import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import AboutSection from "../modules/AboutSection/AboutSection";
import BrowseAllWorkButton from "../modules/WorkSection/BrowseAllWorkButton";
import WorkSection from "../modules/WorkSection/WorkSection";
import ExperienceAndCoursesSection from "../modules/ExperienceAndCoursesSection/ExperienceAndCoursesSection";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
`;

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Header />
    <LandingContainer />
    <SectionTitle title="About" />
    <AboutSection />
    <SectionTitle title="Work" rightElement={<BrowseAllWorkButton />} />
    <WorkSection />
    <ExperienceAndCoursesSection />
    <LandingContainer />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
