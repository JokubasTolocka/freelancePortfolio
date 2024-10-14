import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Typography from "./Typography";
import constants from "../constants/constants.json";
import Squiggle from "./Squiggle";
import SocialMedia from "./SocialMedia";

export const HEADER_CONTENT_HEIGHT = 72;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${HEADER_CONTENT_HEIGHT}px;
  padding: 0 32px;
  width: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Header = () => (
  <Wrapper>
    <Container isHeader>
      <ContentWrapper>
        <Typography variant="Heading4">Let's do it.</Typography>
        <RightContainer>
          <Typography variant="Heading4">{constants.EMAIL}</Typography>
          <Squiggle />
          <SocialMedia />
        </RightContainer>
      </ContentWrapper>
    </Container>
  </Wrapper>
);

export default Header;
