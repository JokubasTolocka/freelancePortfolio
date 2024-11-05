import React from "react";
import styled from "styled-components";
import Experience from "./Experience";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
`;

const ExperienceAndCoursesSection = () => {
  return (
    <Wrapper>
      <Experience />
      {/* <Graphics />
      <Certications /> */}
    </Wrapper>
  );
};

export default ExperienceAndCoursesSection;
