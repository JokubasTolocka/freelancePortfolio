import React, { useRef } from "react";
import styled from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header";
import Typography from "../../components/Typography";
import AnimatedLetters from "../../components/LandingText/AnimatedLetters";
import MatterCanvas from "./MatterCanvas/MatterCanvas";

const Wrapper = styled.div`
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  position: relative;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
  /* background-color: rgba('1') */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 64px 64px 64px;
  z-index: 2;
  position: relative;
  padding-top: 32px;
`;

const LandingHeaderTypography = styled(Typography)`
  font-weight: 500;
  width: fit-content;
`;

const LandingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper ref={containerRef}>
      <MatterCanvas />
      <Content>
        <LandingHeaderTypography variant="Header">
          <AnimatedLetters title="I'm Jacob," />
          <AnimatedLetters title="a web creator crafting" delayChildren={0.6} />
          {/* <AnimatedLetters
            title="user experiences through"
            delayChildren={1.4}
          />
          <AnimatedLetters title="design and development" delayChildren={2} /> */}
        </LandingHeaderTypography>
      </Content>
    </Wrapper>
  );
};

export default LandingSection;
