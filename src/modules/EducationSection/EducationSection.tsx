import React from "react";
import { ListItemType } from "../../components/List/List";
import ListSection from "../../components/ListSection";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const workData: ListItemType[] = [
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
    tags: ["React", "Typescript", "Graphql", "Pupeteer"],
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
    tags: ["React", "Typescript", "Graphql", "Pupeteer"],
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
    tags: ["React", "Typescript", "Graphql", "Pupeteer"],
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
    tags: ["React", "Typescript", "Graphql", "Pupeteer"],
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
    tags: ["React", "Typescript", "Graphql", "Pupeteer"],
  },
];

const EducationSection = () => {
  return (
    <ListSection title={SectionTitleEnum.Education} listItems={workData} />
  );
};

export default EducationSection;
