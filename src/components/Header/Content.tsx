import React from "react";
import styled from "styled-components";
import Typography from "../Typography";
import Squiggle from "../Squiggle";
import SocialMedia from "../SocialMedia";
import Container from "../Container";

export const HEADER_CONTENT_HEIGHT = 72;

const Wrapper = styled.div`
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

const BorderBottomBox = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.black}`};
`;

const Content = () => (
  <BorderBottomBox>
    <Container>
      <Wrapper>
        <Typography variant="Heading4">Let's do it.</Typography>
        <RightContainer>
          <Typography variant="Heading4">jokubas.tj@gmail.com</Typography>
          <Squiggle />
          <SocialMedia />
        </RightContainer>
      </Wrapper>
    </Container>
  </BorderBottomBox>
);

export default Content;
