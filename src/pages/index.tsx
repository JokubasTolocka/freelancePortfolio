import * as React from "react";
import { useEffect } from "react";
// @ts-ignore
import { useLenis } from "lenis/react";
import type { HeadFC, PageProps } from "gatsby";
import AboutSection from "../modules/Landing/AboutSection/AboutSection";
import BrowseAllWorkButton from "../modules/Landing/WorkSection/BrowseAllWorkButton";
import WorkSection from "../modules/Landing/WorkSection/WorkSection";
import LandingSection from "../modules/Landing/LandingSection/LandingSection";
import { SectionTitleEnum } from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import SectionWrapper from "../components/SectionWrapper";
import ExperienceSection from "../modules/Landing/ExperienceSection/ExperienceSection";
import EducationSection from "../modules/Landing/EducationSection/EducationSection";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  const lenis = useLenis();

  useEffect(() => {
    if (window.location.hash) {
      lenis?.scrollTo(window.location.hash);
    }
  }, []);

  return (
    <Layout>
      <SectionWrapper>
        <LandingSection />
      </SectionWrapper>
      <SectionWrapper
        title={SectionTitleEnum.Work}
        titleRightElement={<BrowseAllWorkButton />}
      >
        <WorkSection />
      </SectionWrapper>
      <SectionWrapper
        title={SectionTitleEnum.Experience}
        shouldShowTitle={false}
      >
        <ExperienceSection />
      </SectionWrapper>
      <SectionWrapper
        title={SectionTitleEnum.Education}
        shouldShowTitle={false}
      >
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper title={SectionTitleEnum.About}>
        <AboutSection />
      </SectionWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
