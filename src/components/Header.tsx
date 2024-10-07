import React from "react";
import styled from "styled-components";
import Typography from "./typography/HeadingTypography";
import Squiggle from "./Squiggle";
import SocialMedia from "./SocialMedia";

const Wrapper = styled.div`
  padding: 0 32px;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const RightContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Header = () => (
  <Wrapper>
    <Typography variant="Heading4">Let's do it.</Typography>
    <RightContainer>
      <Typography variant="Heading4">jokubas.tj@gmail.com</Typography>
      <Squiggle />
      <SocialMedia />
    </RightContainer>
  </Wrapper>
);

export default Header;
