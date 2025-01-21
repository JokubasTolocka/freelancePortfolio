import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import AboutSection from "../modules/AboutSection/AboutSection";
import BrowseAllWorkButton from "../modules/WorkSection/BrowseAllWorkButton";
import WorkSection from "../modules/WorkSection/WorkSection";
import LandingSection from "../modules/LandingSection/LandingSection";
import Footer from "../components/Footer";
import HeaderTitleContextProvider, {
  SectionTitleEnum,
} from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import SectionWrapper from "../components/SectionWrapper";
import ExperienceSection from "../modules/ExperienceSection/ExperienceSection";
import EducationSection from "../modules/EducationSection/EducationSection";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => (
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
    <SectionWrapper title={SectionTitleEnum.Experience} shouldShowTitle={false}>
      <ExperienceSection />
    </SectionWrapper>
    <SectionWrapper title={SectionTitleEnum.Education} shouldShowTitle={false}>
      <EducationSection />
    </SectionWrapper>
    <SectionWrapper title={SectionTitleEnum.About}>
      <AboutSection />
    </SectionWrapper>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
