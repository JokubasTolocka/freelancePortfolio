import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import AboutSection from "../modules/AboutSection/AboutSection";
import BrowseAllWorkButton from "../modules/WorkSection/BrowseAllWorkButton";
import WorkSection from "../modules/WorkSection/WorkSection";
import ExperienceAndCoursesSection from "../modules/ExperienceAndCoursesSection/ExperienceAndCoursesSection";
import ServicesSection from "../modules/ServicesSection/ServicesSection";
import LandingSection from "../modules/LandingSection/LandingSection";

const IndexPage: React.FC<PageProps> = () => (
  <>
    <Header />
    <LandingSection />
    <SectionTitle title="About" />
    <AboutSection />
    <SectionTitle title="Services" />
    <ServicesSection />
    <SectionTitle title="Work" rightElement={<BrowseAllWorkButton />} />
    <WorkSection />
    <ExperienceAndCoursesSection />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Jokūbas Toločka</title>;
