import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { HEADER_CONTENT_HEIGHT } from "../../components/Header";
import Typography from "../../components/Typography";
import AnimatedLetters from "../../components/AnimatedLetters";
import MatterCanvas from "./MatterCanvas/MatterCanvas";
import { useAnimate } from "framer-motion";

const Wrapper = styled.div`
  border-bottom: ${({ theme }) => `4px solid ${theme.colors.black}`};
  position: relative;
  height: calc(100vh - ${HEADER_CONTENT_HEIGHT}px);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 64px 64px 64px;
  z-index: 2;
  position: relative;
  padding-top: 32px;
  color: ${({ theme }) => theme.colors.black};
`;

const LandingHeaderTypography = styled(Typography)`
  font-weight: 500;
  width: fit-content;
`;

export const FALL_ANIMATION_DELAY_SECONDS = 1.6;

const LandingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [_, animate] = useAnimate();
  const theme = useTheme();

  useEffect(() => {
    if (contentRef.current)
      animate(
        contentRef.current,
        { color: theme.colors.gray },
        { delay: FALL_ANIMATION_DELAY_SECONDS }
      );
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <MatterCanvas />
      <Content ref={contentRef}>
        <LandingHeaderTypography variant="Header">
          <AnimatedLetters title="I'm Jacob," />
          <AnimatedLetters title="a web creator crafting" delayChildren={0.3} />
          <AnimatedLetters
            title="user experiences through"
            delayChildren={0.6}
          />
          <AnimatedLetters title="design and development" delayChildren={0.9} />
        </LandingHeaderTypography>
      </Content>
    </Wrapper>
  );
};

export default LandingSection;
