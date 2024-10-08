import React from "react";
import styled from "styled-components";
import Typography from "../typography/HeadingTypography";
import Squiggle from "../Squiggle";
import SocialMedia from "../SocialMedia";

const RightContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Content = () => (
  <>
    <Typography variant="Heading4">Let's do it.</Typography>
    <RightContainer>
      <Typography variant="Heading4">jokubas.tj@gmail.com</Typography>
      <Squiggle />
      <SocialMedia />
    </RightContainer>
  </>
);

export default Content;
