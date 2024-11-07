import React from "react";
import styled from "styled-components";
import ServicesCard from "./ServicesCard";

const SERVICES = [
  {
    title: "Design",
    description:
      "The design process starts at figuring out your users needs and follows the key steps: understand, prototype, design, develop and iterate. We will ensure the design is professional, intuitive, eye-catching and follows key design principles.",
  },
  {
    title: "Design",
    description:
      "The design process starts at figuring out your users needs and follows the key steps: understand, prototype, design, develop and iterate. We will ensure the design is professional, intuitive, eye-catching and follows key design principles.",
  },
  {
    title: "Design",
    description:
      "The design process starts at figuring out your users needs and follows the key steps: understand, prototype, design, develop and iterate. We will ensure the design is professional, intuitive, eye-catching and follows key design principles.",
  },
  {
    title: "Design",
    description:
      "The design process starts at figuring out your users needs and follows the key steps: understand, prototype, design, develop and iterate. We will ensure the design is professional, intuitive, eye-catching and follows key design principles.",
  },
  {
    title: "Design",
    description:
      "The design process starts at figuring out your users needs and follows the key steps: understand, prototype, design, develop and iterate. We will ensure the design is professional, intuitive, eye-catching and follows key design principles.",
  },
  {
    title: "Design",
    description:
      "The design process starts at figuring out your users needs and follows the key steps: understand, prototype, design, develop and iterate. We will ensure the design is professional, intuitive, eye-catching and follows key design principles.",
  },
];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const ServicesSection = () => {
  return (
    <Wrapper>
      {SERVICES.map(({ title, description }, key) => (
        <ServicesCard
          key={key}
          title={title}
          description={description}
          elementIndex={key + 1}
        />
      ))}
    </Wrapper>
  );
};

export default ServicesSection;
