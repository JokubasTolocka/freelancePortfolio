import React from "react";
import { ListItemType } from "../../../components/List/List";
import ListSection from "../../../components/ListSection";
import { SectionTitleEnum } from "../../../contexts/HeaderTitleContext/HeaderTitleContextProvider";

const workData: ListItemType[] = [
  {
    position: "Computer Science BSc",
    place: "University of Leeds",
    time: "3 years",
    tags: ["Python", "C", "Java", "Systems Architecture", "Project Management"],
  },
  {
    position: "Google UX Design Specialization",
    time: "6 months",
    tags: [
      "UI",
      "UX",
      "Figma",
      "AdobeXD",
      "Wireframing",
      "Prototyping",
      "Testing",
    ],
  },
  {
    position: "Adobe Illustrator Mega course",
    time: "3 months",
    tags: ["Adobe Illustrator", "Illustration"],
  },
  {
    position: "Local Art School",
    place: "Molėtai, Lithuania",
    time: "7 years",
    tags: ["Graphic Design", "Color Theory", "Sculpture", "Drawing"],
  },
];

const EducationSection = () => {
  return (
    <ListSection title={SectionTitleEnum.Education} listItems={workData} />
  );
};

export default EducationSection;
