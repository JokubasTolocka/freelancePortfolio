import React from "react";
import { ListItemType } from "../../components/List/List";
import ListSection from "../../components/ListSection";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const workData: ListItemType[] = [
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
    tags: ["React", "Typescript", "MaterialUI", "Graphql", "Playwright"],
  },
  {
    position: "Frontend Engineer",
    place: "Konkurenta",
    time: "3.5 years",
    tags: [
      "React",
      "React Native",
      "Typescript",
      "Tailwind",
      "Graphql",
      "Pupeteer",
      "Storybook",
    ],
  },
  {
    position: "Contract UI/UX Designer",
    place: "UniSalad",
    time: "1.1 years",
    tags: ["Figma", "Adobe Illustrator"],
  },
  {
    position: "Full Stack Developer",
    place: "UniSalad",
    time: "2 months",
    tags: ["React Native", "Typescript", "REST"],
  },
  {
    position: "Full Stack Developer",
    place: "carVertical",
    time: "2 months",
    tags: ["Gatsby", "Typescript", "Graphql", "CSS"],
  },
];

const ExperienceSection = () => (
  <ListSection
    title={SectionTitleEnum.Experience}
    listItems={workData}
    hasLinkedInLink
  />
);

export default ExperienceSection;
