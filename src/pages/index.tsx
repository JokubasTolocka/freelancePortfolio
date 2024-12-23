import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import SectionTitle from "../components/SectionTitle";
import AboutSection from "../modules/AboutSection/AboutSection";
import BrowseAllWorkButton from "../modules/WorkSection/BrowseAllWorkButton";
import WorkSection from "../modules/WorkSection/WorkSection";
import ExperienceAndCoursesSection from "../modules/ExperienceAndCoursesSection/ExperienceAndCoursesSection";
import ServicesSection from "../modules/ServicesSection/ServicesSection";
import LandingSection from "../modules/LandingSection/LandingSection";
import Footer from "../components/Footer";
import ServicesCTA from "../modules/ServicesSection/ServicesCTA";
import WorkSectionFooter from "../modules/WorkSection/BrowseAllWorkFooter";
import HeaderTitleContextProvider, {
  SectionTitleEnum,
} from "../contexts/HeaderTitleContext/HeaderTitleContextProvider";
import SectionWrapper from "../components/SectionWrapper";

const IndexPage: React.FC<PageProps> = () => (
  <HeaderTitleContextProvider>
    <Header />
    <SectionWrapper>
      <LandingSection />
    </SectionWrapper>
    <SectionWrapper title={SectionTitleEnum.About}>
      <AboutSection />
    </SectionWrapper>
    <SectionWrapper title={SectionTitleEnum.Services}>
      <ServicesSection />
      <ServicesCTA />
    </SectionWrapper>
    <SectionWrapper
      title={SectionTitleEnum.Work}
      titleRightElement={<BrowseAllWorkButton />}
    >
      <WorkSection />
      <WorkSectionFooter />
      <ExperienceAndCoursesSection />
    </SectionWrapper>
    <Footer />
  </HeaderTitleContextProvider>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
