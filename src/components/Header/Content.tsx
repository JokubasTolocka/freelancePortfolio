import React from "react";
import styled from "styled-components";
import Typography from "../typography/HeadingTypography";
import Squiggle from "../Squiggle";
import SocialMedia from "../SocialMedia";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 32px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const RightContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Content = () => (
  <Wrapper>
    <Typography variant="Heading4">Let's do it.</Typography>
    <RightContainer>
      <Typography variant="Heading4">jokubas.tj@gmail.com</Typography>
      <Squiggle />
      <SocialMedia />
    </RightContainer>
  </Wrapper>
);

export default Content;
