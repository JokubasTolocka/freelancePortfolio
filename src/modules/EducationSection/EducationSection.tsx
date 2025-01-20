import React from "react";
import { ListItemType } from "../../components/List/List";
import ListSection from "../../components/ListSection";
import { SectionTitleEnum } from "../../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const workData: ListItemType[] = [
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
  },
  {
    position: "Frontend Engineer",
    place: "FinBytes",
    time: "Oct 2024 - Present",
  },
];

const EducationSection = () => {
  return (
    <ListSection title={SectionTitleEnum.Education} listItems={workData} />
  );
};

export default EducationSection;
