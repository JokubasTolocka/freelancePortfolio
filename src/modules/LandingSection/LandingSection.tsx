import React from "react";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header";
import Typography from "../../components/Typography";
import AnimatedLetters from "../../components/LandingText/AnimatedLetters";

const Wrapper = styled.div`
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 64px 64px 64px;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
`;

const LandingHeaderTypography = styled(Typography)`
  font-weight: 500;
  width: fit-content;
`;

const LandingSection = () => {
  return (
    <Wrapper>
      <Content>
        <LandingHeaderTypography variant="Header">
          <AnimatedLetters title="I'm Jacob," />
          <AnimatedLetters
            title="a multidisciplinary web"
            delayChildren={0.6}
          />
        </LandingHeaderTypography>
      </Content>
    </Wrapper>
  );
};

export default LandingSection;
